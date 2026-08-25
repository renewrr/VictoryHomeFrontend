import {
  Component,
  computed,
  ElementRef,
  EventEmitter,
  inject,
  Input,
  Output,
  signal,
  Signal,
  ViewChild,
} from '@angular/core';
import { HandoverMessageTableService } from '../../services/handover-message-table-service';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { TranslateModule } from '@ngx-translate/core';
import { MainPagedHandoverMessageResponseMainHandoverMessageRow } from '../../core/api-client-v2';
import { LocalizationService } from '../../services/localization-service';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-handover-message-table-v2',
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    TranslateModule,
    MatProgressBarModule,
  ],
  templateUrl: './handover-message-table-v2.html',
  styleUrl: './handover-message-table-v2.scss',
})
export class HandoverMessageTableV2 {
  protected dataService = inject(HandoverMessageTableService);
  protected localization = inject(LocalizationService);
  @Input() highlightText: Signal<string[]> = signal([]);
  @Output() rowClicked = new EventEmitter();

  displayedColumns = ['timestamp', 'creator', 'shift', 'floors'];
  @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef;

  asDataRow(row: MainPagedHandoverMessageResponseMainHandoverMessageRow) {
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

  rowSelected(index: number) {
    this.dataService.selectIndex(index);
    this.rowClicked.emit();
  }

  toDatetime(timestamp: string) {
    return new Date(timestamp);
  }
}
