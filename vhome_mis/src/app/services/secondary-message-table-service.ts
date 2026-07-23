import { computed, inject, Injectable, linkedSignal, ResourceStatus, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { FilterStateService, HandoverFilterState } from './filter-state-service';
import { toLocalStartOfDayISO } from '../shared/utils/date.utils';
import { HandoverSystemService, SecondaryHandoverMessageResponse } from '../core/api-client-v2';
import { AuthService } from './auth-service';

export interface SecondaryMessageState {
  pageIndex: number;
  pageSize: number;
}

interface NetworkTrackerState {
  data: SecondaryHandoverMessageResponse | undefined;
  status: ResourceStatus;
}

@Injectable({
  providedIn: 'root',
})
export class SecondaryMessageTableService {
  handoverApi = inject(HandoverSystemService);
  filterStateService = inject(FilterStateService);
  authService = inject(AuthService);

  private pagingState = linkedSignal<HandoverFilterState, SecondaryMessageState>({
    source: () => this.filterStateService.state(),
    computation: (newFilters, previous) => {
      const fallbackPageSize = previous?.value.pageSize ?? 10;
      return {
        pageIndex: 0,
        pageSize: fallbackPageSize,
      };
    },
  });

  private apiParams = computed(() => {
    const s = this.pagingState();
    const f_s = this.filterStateService.state();
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

  private messageSource = rxResource({
    params: () => ({ data: this.apiParams(), status: this.authService.isAuthenticated() }),
    stream: ({ params }) =>
      this.handoverApi.apiV3HandoverFilteredSecondaryMessageGet(
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

  private stableResponse = linkedSignal<
    NetworkTrackerState,
    SecondaryHandoverMessageResponse | undefined
  >({
    source: () => ({
      data: this.messageSource.value(),
      status: this.messageSource.status(),
    }),
    computation: (current, previous) => {
      // - current: NetworkTrackerState
      // - previous: { source: NetworkTrackerState; value: SecondaryHandoverMessageResponse | undefined } | undefined
      if (current.status === 'loading' && previous?.value) {
        return previous.value; // Lock previous data container on screen
      }
      return current.data; // Pass through the fresh server data
    },
  });

  public messages = computed(() => this.stableResponse()?.data_rows ?? []);
  public length = computed(() => this.stableResponse()?.data_count ?? 0);
  public isLoading = computed(() => this.messageSource.isLoading());
  public currentPageIndex = computed(() => this.pagingState().pageIndex);
  public currentPageSize = computed(() => this.pagingState().pageSize);

  public updatePage(pageIndex: number, pageSize: number) {
    this.pagingState.update((s) => ({ ...s, pageIndex: pageIndex, pageSize: pageSize }));
  }
  public tableRefresh() {
    this.messageSource.reload();
  }
}
