import { Injectable, computed, inject, linkedSignal, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import {
  HandoverSystemService,
  SecondaryHandoverMessageResponse,
  SecondaryHandoverMessageResponseSecondaryHandoverMessageRow,
} from '../core/api-client-v2';
import { FilterStateService, HandoverFilterState } from '../services/filter-state-service';
import { SecondaryMessageState } from '../services/secondary-message-table-service';
import { AuthService } from '../services/auth-service';
import { toLocalStartOfDayISO } from '../shared/utils/date.utils';
import und from '@angular/common/locales/und';

@Injectable({
  providedIn: 'root',
})
export class SecondaryStore {
  private handoverService = inject(HandoverSystemService);
  private filterService = inject(FilterStateService);
  private authService = inject(AuthService);

  // 1. Core State Signals
  readonly pageIndex = signal<number>(0);
  readonly pageSize = signal<number>(40);

  private pagingState = linkedSignal<HandoverFilterState, SecondaryMessageState>({
    source: () => this.filterService.state(),
    computation: (newFilters, previous) => {
      const fallbackPageSize = previous?.value.pageSize ?? 10;
      return {
        pageIndex: 0,
        pageSize: fallbackPageSize,
      };
    },
  });

  // 2. Computed API Request Payload
  private apiParams = computed(() => {
    const s = this.pagingState();
    const f_s = this.filterService.state();
    return {
      pageIndex: s.pageIndex,
      pageSize: s.pageSize,
      startTime: f_s.startTime,
      endTime: f_s.endTime,
      messageTypeIds: f_s.messageTypeIds,
      locationIds: f_s.locationIds,
      shiftIds: f_s.shiftIds,
      creatorIds: f_s.creatorIds,
      serviceUserIds: f_s.serviceUserIds,
      keywords: f_s.keywords,
    };
  });

  // 3. Declarative Resource Fetcher (Automatic refetch on apiParams change)
  private messageSource = rxResource({
    params: () => ({ data: this.apiParams(), status: this.authService.isAuthenticated() }),
    stream: ({ params }) =>
      this.handoverService.apiV3HandoverFilteredSecondaryMessageGet(
        toLocalStartOfDayISO(params.data.startTime),
        toLocalStartOfDayISO(params.data.endTime),
        params.data.messageTypeIds,
        params.data.shiftIds,
        params.data.creatorIds,
        params.data.locationIds,
        params.data.serviceUserIds,
        params.data.keywords,
        params.data.pageIndex,
        params.data.pageSize,
      ),
  });

  // 4. LinkedSignal: Sparse Array Cache that avoids blank/flickering UI
  readonly displayList = linkedSignal<
    {
      filters: HandoverFilterState;
      response?: {
        items: SecondaryHandoverMessageResponseSecondaryHandoverMessageRow[];
        totalCount: number;
      };
    },
    (SecondaryHandoverMessageResponseSecondaryHandoverMessageRow | undefined)[]
  >({
    source: () => ({
      filters: this.filterService.state(),
      response: this.messageSource
        ? {
            items: this.messageSource.value()!.data_rows,
            totalCount: this.messageSource.value()!.data_count,
          }
        : undefined,
    }),
    computation: (source, previous) => {
      const response = source.response;

      // If initial fetch is in flight and no prior cache exists
      if (!response) {
        return previous?.value ?? [];
      }

      const filtersChanged = previous?.source.filters !== source.filters;
      const totalCount = response.totalCount;

      let sparseArray: (SecondaryHandoverMessageResponseSecondaryHandoverMessageRow | undefined)[];

      // Reset array if filters changed or total count shifted
      if (filtersChanged || !previous?.value || previous.value.length !== totalCount) {
        sparseArray = Array.from({ length: totalCount });
      } else {
        sparseArray = [...previous.value]; // Retain loaded chunks
      }

      // Splice the newly returned page chunk into sparse array
      const currentPage = this.pageIndex();
      const size = this.pageSize();
      const offset = currentPage * size;

      response.items.forEach((item, idx) => {
        sparseArray[offset + idx] = item;
      });

      return sparseArray;
    },
  });

  requestPage(page: number): void {
    if (this.pageIndex() !== page) {
      this.pageIndex.set(page);
    }
  }

  reload(): void {
    this.messageSource.reload();
  }
}
