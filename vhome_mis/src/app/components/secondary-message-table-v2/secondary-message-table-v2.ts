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
import { CurrentUserLookupService } from '../../services/current-user-lookup-service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../services/auth-service';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { GenericConfirmationDialog } from '../../containers/dialogs/generic-confirmation-dialog/generic-confirmation-dialog';

@Component({
  selector: 'app-secondary-message-table-v2',
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    TranslateModule,
    HighlightPipe,
    MatProgressBar,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
  ],
  templateUrl: './secondary-message-table-v2.html',
  styleUrl: './secondary-message-table-v2.scss',
})
export class SecondaryMessageTableV2 {
  protected dataService = inject(SecondaryMessageTableService);
  protected localization = inject(LocalizationService);
  protected currentUserService = inject(CurrentUserLookupService);
  protected authService = inject(AuthService);
  protected dialogService = inject(MatDialog);
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

  startEdit(row: SecondaryHandoverMessageResponseSecondaryHandoverMessageRow) {
    this.dataService.startEdit(row);
  }

  confirmDelete(row: SecondaryHandoverMessageResponseSecondaryHandoverMessageRow) {
    this.dialogService
      .open(GenericConfirmationDialog, {
        width: '440px',
        disableClose: true, // Prevents closing by accidentally clicking outside the modal
        data: {
          title: '刪除訊息?',
          message: `確認刪除訊息 "${row.message_body}"？`,
          confirmText: '刪除訊息',
          cancelText: '保留訊息',
          color: 'warn', // Makes the confirmation button red!
        },
      })
      .afterClosed()
      .subscribe((status) => {
        if (status) {
          this.dataService.commitEdit(row);
        }
      });
  }
}
