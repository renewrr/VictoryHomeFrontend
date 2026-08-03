import { computed, inject, Injectable, linkedSignal, ResourceStatus, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { FilterStateService, HandoverFilterState } from './filter-state-service';
import { toLocalStartOfDayISO } from '../shared/utils/date.utils';
import {
  HandoverSystemService,
  SecondaryHandoverMessageResponse,
  SecondaryHandoverMessageResponseSecondaryHandoverMessageRow,
} from '../core/api-client-v2';
import { AuthService } from './auth-service';

export interface SecondaryMessageState {
  pageIndex: number;
  pageSize: number;
}

interface NetworkTrackerState {
  data: SecondaryHandoverMessageResponse | undefined;
  status: ResourceStatus;
}

interface EditableSecondaryRow extends SecondaryHandoverMessageResponseSecondaryHandoverMessageRow {
  deleted: boolean;
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
  public editingRows = signal<Record<number, EditableSecondaryRow>>({});

  public updatePage(pageIndex: number, pageSize: number) {
    this.pagingState.update((s) => ({ ...s, pageIndex: pageIndex, pageSize: pageSize }));
  }
  public tableRefresh() {
    this.messageSource.reload();
  }

  private generateEditableRow(msg: SecondaryHandoverMessageResponseSecondaryHandoverMessageRow) {
    const msgData: EditableSecondaryRow = {
      ...structuredClone(msg),
      deleted: false,
    };
    return msgData;
  }
  public getBuffer(msg: SecondaryHandoverMessageResponseSecondaryHandoverMessageRow) {
    return this.editingRows()[msg.ID];
  }

  public dropBuffer(msg: SecondaryHandoverMessageResponseSecondaryHandoverMessageRow) {
    delete this.editingRows()[msg.ID];
  }
  public isEditing(msg: SecondaryHandoverMessageResponseSecondaryHandoverMessageRow) {
    return msg.ID in this.editingRows();
  }
  public startEdit(msg: SecondaryHandoverMessageResponseSecondaryHandoverMessageRow) {
    if (!this.isEditing(msg)) {
      const msgData = this.generateEditableRow(msg);
      this.editingRows.update((rec) => ({
        ...rec,
        [msg.ID]: msgData,
      }));
    }
  }
  public undoEdit(msg: SecondaryHandoverMessageResponseSecondaryHandoverMessageRow) {
    const msgData = this.generateEditableRow(msg);
    this.editingRows.update((rec) => ({
      ...rec,
      [msg.ID]: msgData,
    }));
  }
  public revertEdit(msg: SecondaryHandoverMessageResponseSecondaryHandoverMessageRow) {
    this.editingRows.update((rec) => {
      const copy = { ...rec };
      delete copy[msg.ID];
      return copy;
    });
  }
  public updateRow(id: number, field: keyof EditableSecondaryRow, value: any) {
    this.editingRows.update((rec) => {
      if (!rec[id]) return rec;
      return {
        ...rec,
        [id]: {
          ...rec[id],
          [field]: value,
        },
      };
    });
  }
  public commitEdit(msg: SecondaryHandoverMessageResponseSecondaryHandoverMessageRow) {
    const buffer = this.getBuffer(msg);
    this.handoverApi
      .apiV3HandoverSecondaryMessagePatch({
        before: { ID: msg.ID, is_deleted: false, message_body: msg.message_body },
        after: { ID: buffer.ID, is_deleted: buffer.deleted, message_body: buffer.message_body },
      })
      .subscribe((response) => {
        this.dropBuffer(msg);
        this.tableRefresh();
      });
  }
}
