import { CdkVirtualScrollViewport, ScrollingModule } from '@angular/cdk/scrolling';
import { Component, effect, inject, Input, signal, Signal, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SecondaryStore } from '../../datasources/secondary-store';
import { MatButtonModule } from '@angular/material/button';
import { SecondaryHandoverMessageResponseSecondaryHandoverMessageRow } from '../../core/api-client-v2';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LocalizationService } from '../../services/localization-service';
import { FilterStateService } from '../../services/filter-state-service';
import { HandoverCard } from '../handover-card/handover-card';

@Component({
  selector: 'app-mobile-handover-panel',
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    ScrollingModule,
    MatCardModule,
    MatProgressSpinnerModule,
    HandoverCard,
  ],
  templateUrl: './mobile-handover-panel.html',
  styleUrl: './mobile-handover-panel.scss',
})
export class MobileHandoverPanel {
  @Input() highlightText: Signal<string[]> = signal([]);
  readonly store = inject(SecondaryStore);
  readonly ITEM_SIZE_PX = 150;
  protected localization = inject(LocalizationService);
  filterService = inject(FilterStateService);
  @ViewChild(CdkVirtualScrollViewport) viewport!: CdkVirtualScrollViewport;

  constructor() {
    // Reacts whenever filter criteria changes (even if current page was 1)
    effect(() => {
      // Register dependency on the filter selection
      this.filterService.state();

      // Scroll to top when filters change
      queueMicrotask(() => {
        this.viewport?.scrollToIndex(0, 'auto');
      });
    });
  }

  trackById(
    _index: number,
    item: SecondaryHandoverMessageResponseSecondaryHandoverMessageRow,
  ): number {
    return item.ID;
  }

  onScrollIndexChange(): void {
    if (!this.viewport) return;
    const rangeEnd = this.viewport.getRenderedRange().end;
    const totalItems = this.store.handovers().length;

    if (
      totalItems > 0 &&
      rangeEnd >= totalItems - 3 &&
      !this.store.isLoadingMore() &&
      this.store.hasMorePages()
    ) {
      this.store.loadNextPage();
    }
  }
  toDatetime(timestamp: string) {
    return new Date(timestamp);
  }
}
