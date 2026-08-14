import { Component, inject, Input, input, signal, Signal } from '@angular/core';
import {
  HandoverSystemService,
  SecondaryEditRequest,
  SecondaryEditRequestSecondaryMessageDetail,
  SecondaryHandoverMessageResponseSecondaryHandoverMessageRow,
} from '../../core/api-client-v2';
import { MatIconModule } from '@angular/material/icon';
import { LocalizationService } from '../../services/localization-service';
import { TranslateModule } from '@ngx-translate/core';
import { HighlightPipe } from '../../pipes/highlight/highlight-pipe';
import { MatButtonModule } from '@angular/material/button';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MobileEditSheet } from '../mobile-edit-sheet/mobile-edit-sheet';
import { SecondaryStore } from '../../datasources/secondary-store';
import { CurrentUserLookupService } from '../../services/current-user-lookup-service';
import { AuthService } from '../../services/auth-service';
import { HandoverDetailBottomSheet } from '../handover-detail-bottom-sheet/handover-detail-bottom-sheet';

@Component({
  selector: 'app-handover-card',
  imports: [TranslateModule, MatIconModule, HighlightPipe, MatButtonModule],
  templateUrl: './handover-card.html',
  styleUrl: './handover-card.scss',
})
export class HandoverCard {
  // Modern Signal Input (Angular 17.1+)
  readonly card = input.required<SecondaryHandoverMessageResponseSecondaryHandoverMessageRow>();
  protected localization = inject(LocalizationService);
  protected handoverApi = inject(HandoverSystemService);
  @Input() highlightText: Signal<string[]> = signal([]);
  private bottomSheet = inject(MatBottomSheet);
  protected store = inject(SecondaryStore);
  currentUserId = inject(CurrentUserLookupService).currentUser().ID;
  managementPrivilege = inject(AuthService).isManagementPrivilege();

  openEditSheet(event: Event) {
    event.stopPropagation()
    const data = this.card();
    const ref = this.bottomSheet.open(MobileEditSheet, {
      data: { message: data },
    });
    ref
      .afterDismissed()
      .subscribe((updatedMessage: SecondaryEditRequestSecondaryMessageDetail | null) => {
        if (updatedMessage) {
          this.handoverApi
            .apiV3HandoverSecondaryMessagePatch({
              before: {
                ID: this.card().ID,
                is_deleted: false,
                message_body: this.card().message_body,
              },
              after: {
                ID: updatedMessage.ID,
                is_deleted: updatedMessage.is_deleted,
                message_body: updatedMessage.message_body,
              },
            })
            .subscribe((response) => {
              console.log(response);
              this.store.refresh();
            });
        }
      });
  }

  openDetails(): void {
    const bottomSheetRef = this.bottomSheet.open(HandoverDetailBottomSheet, {
      data: [this.card(), this.highlightText()],
      panelClass: 'handover-bottom-sheet-panel',
    });

    bottomSheetRef.afterDismissed().subscribe();
  }

  toDatetime(timestamp: string) {
    return new Date(timestamp);
  }
}
