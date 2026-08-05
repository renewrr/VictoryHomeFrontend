import { ScrollingModule } from '@angular/cdk/scrolling';
import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SecondaryStore } from '../../datasources/secondary-store';
import { MatButtonModule } from '@angular/material/button';
import { SecondaryHandoverMessageResponseSecondaryHandoverMessageRow } from '../../core/api-client-v2';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LocalizationService } from '../../services/localization-service';

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
  ],
  templateUrl: './mobile-handover-panel.html',
  styleUrl: './mobile-handover-panel.scss',
})
export class MobileHandoverPanel {
  readonly store = inject(SecondaryStore);
  readonly ITEM_SIZE_PX = 120;
  protected localization = inject(LocalizationService);

  trackById(
    _index: number,
    item: SecondaryHandoverMessageResponseSecondaryHandoverMessageRow,
  ): number {
    return item.ID;
  }

  onScrollIndexChange(renderedIndex: number): void {
    const totalItems = this.store.handovers().length;

    if (
      totalItems > 0 &&
      renderedIndex >= totalItems - 4 &&
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
