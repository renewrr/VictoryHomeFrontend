import { computed, inject, Injectable, linkedSignal, ResourceStatus, signal } from '@angular/core';
import {
  MainPagedHandoverMessageResponse,
  MainPagedHandoverMessageResponseMainHandoverMessageRow,
  SingleHandoverMessage,
} from '../core/api-client-v2';
import { rxResource } from '@angular/core/rxjs-interop';
import { map, tap } from 'rxjs';
import { FilterStateService, HandoverFilterState } from './filter-state-service';
import { toLocalStartOfDayISO } from '../shared/utils/date.utils';
import { HandoverSystemService, ServiceUserSystemService } from '../core/api-client-v2';

export interface HandvoerMessageState {
  pageIndex: number;
  pageSize: number;
  selectedPageIndex: number;
}

interface NetworkTrackerState {
  data: MainPagedHandoverMessageResponse | undefined;
  status: ResourceStatus;
}

interface NetworkTrackerStateDetail {
  data: [
    MainPagedHandoverMessageResponseMainHandoverMessageRow | undefined,
    SingleHandoverMessage | undefined,
  ];
  status: ResourceStatus;
}

@Injectable({
  providedIn: 'root',
})
export class HandoverMessageTableService {
  handoverService = inject(HandoverSystemService);
  serviceUserService = inject(ServiceUserSystemService);
  filterStateService = inject(FilterStateService);

  private pagingState = linkedSignal<HandoverFilterState, HandvoerMessageState>({
    source: () => this.filterStateService.state(),
    computation: (newFilters, previous) => {
      const fallbackPageSize = previous?.value.pageSize ?? 10;
      const fallbackSelectIndex = previous?.value.selectedPageIndex ?? -1;
      return {
        pageIndex: 0,
        pageSize: fallbackPageSize,
        selectedPageIndex: fallbackSelectIndex,
      };
    },
  });

  private allServiceUsers: Record<number, string[]> = {};

  private apiParams = computed(() => {
    const s = this.pagingState();
    const fs = this.filterStateService.state();
    return {
      pageIndex: s.pageIndex,
      pageSize: s.pageSize,
      startTime: fs.startTime,
      endTime: fs.endTime,
      messageTypeIds: fs.messageTypeIds,
      locationIds: fs.locationIds,
      shiftIds: fs.shiftIds,
      creatorIds: fs.creatorIds,
      serviceUserIds: fs.serviceUserIds,
      keywords: fs.keywords,
    };
  });

  private messageSource = rxResource({
    params: () => this.apiParams(),
    stream: ({ params }) =>
      this.handoverService.apiV3HandoverFilteredHandoverMessageGet(
        toLocalStartOfDayISO(params.startTime),
        toLocalStartOfDayISO(params.endTime),
        params.messageTypeIds,
        params.shiftIds,
        params.creatorIds,
        params.locationIds,
        params.serviceUserIds,
        params.keywords,
        params.pageIndex,
        params.pageSize,
      ),
  });

  private stableResponse = linkedSignal<
    NetworkTrackerState,
    MainPagedHandoverMessageResponse | undefined
  >({
    source: () => ({
      data: this.messageSource.value(),
      status: this.messageSource.status(),
    }),
    computation: (current, previous) => {
      // - current: NetworkTrackerState
      // - previous: { source: NetworkTrackerState; value: MainPagedHandoverMessageResponse | undefined } | undefined
      if (current.status === 'loading' && previous?.value) {
        return previous.value; // Lock previous data container on screen
      }
      return current.data; // Pass through the fresh server data
    },
  });

  private selectedRow = computed(
    () => this.stableResponse()?.data_rows[this.pagingState().selectedPageIndex],
  );
  private indexOffset = computed(() => this.pagingState().pageIndex * this.pagingState().pageSize);

  private detailSource = rxResource({
    params: () => this.selectedRow()?.ID,
    stream: ({ params }) => this.handoverService.apiV3HandoverSingleHandoverMessageGet(params),
  });

  private stableDetailResponse = linkedSignal<
    NetworkTrackerStateDetail,
    [
      MainPagedHandoverMessageResponseMainHandoverMessageRow | undefined,
      SingleHandoverMessage | undefined,
    ]
  >({
    source: () => ({
      data: [this.selectedRow(), this.detailSource.value()],
      status: this.detailSource.status(),
    }),
    computation: (current, previous) => {
      // - current: NetworkTrackerState
      // - previous: { source: NetworkTrackerState; value: MainPagedHandoverMessageResponse | undefined } | undefined
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
  public selectedPageIndex = computed(() => this.pagingState().selectedPageIndex);
  public detailMessage = computed(() => this.stableDetailResponse());
  public hasNextRow = computed(
    () => this.selectedPageIndex() + this.indexOffset() + 1 < this.length(),
  );
  public hasPrevRow = computed(() => this.selectedPageIndex() + this.indexOffset() - 1 >= 0);
  public selectedUserNames = computed(() => {
    const nameList: string[] = [];
    for (const user_id of this.filterStateService.state().serviceUserIds) {
      if (user_id in this.allServiceUsers) {
        for (const name of this.allServiceUsers[user_id]) {
          nameList.push(name);
        }
      }
    }
    return nameList;
  });

  public updatePage(pageIndex: number, pageSize: number) {
    this.pagingState.update((s) => ({ ...s, pageIndex: pageIndex, pageSize: pageSize }));
  }

  public selectIndex(index: number) {
    this.pagingState.update((s) => ({ ...s, selectedPageIndex: index }));
  }

  public deselectIndex() {
    this.pagingState.update((s) => ({ ...s, selectedPageIndex: -1 }));
  }

  private handlePageBorder() {
    if (this.pagingState().selectedPageIndex == -1) {
      const lastIdx = this.pagingState().pageSize;
      this.pagingState.update((s) => ({ ...s, selectedPageIndex: lastIdx - 1 }));
      this.updatePage(this.pagingState().pageIndex - 1, this.pagingState().pageSize);
    } else if (this.pagingState().selectedPageIndex == this.pagingState().pageSize) {
      this.pagingState.update((s) => ({ ...s, selectedPageIndex: 0 }));
      this.updatePage(this.pagingState().pageIndex + 1, this.pagingState().pageSize);
    }
  }

  public nextIndex() {
    const idx = this.selectedPageIndex();
    if (idx !== null && this.hasNextRow()) {
      this.pagingState.update((s) => ({ ...s, selectedPageIndex: idx + 1 }));
      this.handlePageBorder();
    }
  }

  public prevIndex() {
    const idx = this.selectedPageIndex();
    if (idx !== null && this.hasPrevRow()) {
      this.pagingState.update((s) => ({ ...s, selectedPageIndex: idx - 1 }));
      this.handlePageBorder();
    }
  }

  public fetchNicknames() {
    return this.serviceUserService.apiV3ServiceuserFlatServiceUserNicknamesGet().pipe(
      tap((response) => {
        response.data_rows.map((user_data) => {
          if (user_data.service_user_id in this.allServiceUsers) {
            this.allServiceUsers[user_data.service_user_id].push(user_data.nickname);
          } else {
            this.allServiceUsers[user_data.service_user_id] = [user_data.nickname];
          }
        });
      }),
    );
  }

  public tableRefresh() {
    this.messageSource.reload();
    this.fetchNicknames().subscribe();
  }
}
