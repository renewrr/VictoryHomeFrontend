import {
  Component,
  computed,
  ElementRef,
  inject,
  Input,
  signal,
  Signal,
  ViewChild,
} from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { SecondaryMessageTableService } from '../../services/secondary-message-table-service';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { TranslateModule } from '@ngx-translate/core';
import { HighlightPipe } from '../../pipes/highlight/highlight-pipe';
import { SecondaryHandoverMessageResponseSecondaryHandoverMessageRow } from '../../core/api-client-v2';
import { MatProgressBar } from '@angular/material/progress-bar';
import { LocalizationService } from '../../services/localization-service';

@Component({
  selector: 'app-secondary-message-table-v2',
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    TranslateModule,
    HighlightPipe,
    MatProgressBar,
  ],
  templateUrl: './secondary-message-table-v2.html',
  styleUrl: './secondary-message-table-v2.scss',
})
export class SecondaryMessageTableV2 {
  protected dataService = inject(SecondaryMessageTableService);
  protected localization = inject(LocalizationService);
  @Input() highlightText: Signal<string[]> = signal([]);

  displayedColumns = ['timestamp', 'creator', 'messageType', 'messageBody'];
  @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef;

  asDataRow(row: SecondaryHandoverMessageResponseSecondaryHandoverMessageRow) {
    return row;
  }

  pageChanged(page_event: PageEvent) {
    this.dataService.updatePage(page_event.pageIndex, page_event.pageSize);
    if (this.scrollContainer) {
      this.scrollContainer.nativeElement.scrollTo({
        top: 0,
        behavior: 'smooth', // Use 'auto' if you want it to be instantaneous
      });
    }
  }

  toDatetime(timestamp: string) {
    return new Date(timestamp);
  }
}
