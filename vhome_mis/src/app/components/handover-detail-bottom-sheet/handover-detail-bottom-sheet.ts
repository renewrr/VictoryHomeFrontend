import { Component, inject, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { SecondaryHandoverMessageResponseSecondaryHandoverMessageRow } from '../../core/api-client-v2';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DatePipe } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { HighlightPipe } from '../../pipes/highlight/highlight-pipe';
import { LocalizationService } from '../../services/localization-service';

@Component({
  selector: 'app-handover-detail-bottom-sheet',
  imports: [RouterModule, MatIconModule, MatButtonModule, TranslatePipe, HighlightPipe],
  templateUrl: './handover-detail-bottom-sheet.html',
  styleUrl: './handover-detail-bottom-sheet.scss',
})
export class HandoverDetailBottomSheet {
  protected card!: SecondaryHandoverMessageResponseSecondaryHandoverMessageRow;
  protected highlightText!: string[];
  protected localization = inject(LocalizationService);
  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA)
    public data: [SecondaryHandoverMessageResponseSecondaryHandoverMessageRow, string[]],
    private bottomSheetRef: MatBottomSheetRef<HandoverDetailBottomSheet>,
  ) {
    this.card = data[0];
    this.highlightText = data[1];
  }

  close(): void {
    this.bottomSheetRef.dismiss();
  }
  toDatetime(timestamp: string) {
    return new Date(timestamp);
  }
}
