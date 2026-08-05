import { Injectable, computed, effect, inject, signal, untracked } from '@angular/core';
import {
  HandoverSystemService,
  SecondaryHandoverMessageResponseSecondaryHandoverMessageRow,
} from '../core/api-client-v2';
import { FilterStateService, HandoverFilterState } from '../services/filter-state-service';
import { toLocalStartOfDayISO } from '../shared/utils/date.utils';

export type StoreStatus = 'idle' | 'loading' | 'loading-more' | 'error';

@Injectable({
  providedIn: 'root',
})
export class SecondaryStore {
  private handoverApi = inject(HandoverSystemService);
  private filterService = inject(FilterStateService);

  // --- Internal Core State Signals ---
  private readonly items = signal<SecondaryHandoverMessageResponseSecondaryHandoverMessageRow[]>(
    [],
  );
  readonly page = signal<number>(0);
  readonly totalCount = signal<number>(0);
  private readonly _status = signal<StoreStatus>('idle');
  private readonly _error = signal<string | null>(null);

  // --- Public Readonly Selectors ---
  readonly handovers = computed(() => this.items());
  readonly status = computed(() => this._status());
  readonly error = computed(() => this._error());

  // Convenience boolean getters derived from status
  readonly isLoadingInitial = computed(() => this._status() === 'loading');
  readonly isLoadingMore = computed(() => this._status() === 'loading-more');
  readonly hasMorePages = computed(() => this.items().length < this.totalCount());

  constructor() {
    // Automatically reset and fetch when FilterStateService selection changes
    effect(() => {
      const state = this.filterService.state();
      untracked(() => {
        this.resetAndFetch(state);
      });
    });
  }

  private resetAndFetch(filters: HandoverFilterState): void {
    this.page.set(0);
    this._status.set('loading');
    this._error.set(null);

    this.handoverApi
      .apiV3HandoverFilteredSecondaryMessageGet(
        toLocalStartOfDayISO(filters.startTime),
        toLocalStartOfDayISO(filters.endTime),
        filters.messageTypeIds,
        filters.shiftIds,
        filters.creatorIds,
        filters.locationIds,
        filters.serviceUserIds,
        filters.keywords,
        this.page(),
        20,
      )
      .subscribe({
        next: (res) => {
          this.items.set(res.data_rows);
          this.totalCount.set(res.data_count);
          this._status.set('idle');
        },
        error: (err) => {
          this._error.set(err.message || 'Failed to load handovers');
          this._status.set('error');
        },
      });
  }
  loadNextPage(): void {
    // Strict Guard: Only fetch next page if currently idle and has remaining items
    if (this._status() !== 'idle' || !this.hasMorePages()) return;

    const nextPage = this.page() + 1;
    this._status.set('loading-more');

    const currentFilters = this.filterService.state();

    this.handoverApi
      .apiV3HandoverFilteredSecondaryMessageGet(
        toLocalStartOfDayISO(currentFilters.startTime),
        toLocalStartOfDayISO(currentFilters.endTime),
        currentFilters.messageTypeIds,
        currentFilters.shiftIds,
        currentFilters.creatorIds,
        currentFilters.locationIds,
        currentFilters.serviceUserIds,
        currentFilters.keywords,
        this.page(),
        20,
      )
      .subscribe({
        next: (res) => {
          this.page.set(nextPage);
          this.items.update((current) => [...current, ...res.data_rows]);
          this.totalCount.set(res.data_count);
          this._status.set('idle');
        },
        error: (err) => {
          this._error.set(err.message || 'Failed to load next page');
          // Revert to idle on pagination error so user can re-try scrolling down
          this._status.set('idle');
        },
      });
  }
  refresh() {
    this.resetAndFetch(this.filterService.state());
  }
}
