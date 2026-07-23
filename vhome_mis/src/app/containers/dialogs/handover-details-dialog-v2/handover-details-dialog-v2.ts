import { Component, computed, inject, Signal } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HighlightPipe } from '../../../pipes/highlight/highlight-pipe';
import { TranslateModule } from '@ngx-translate/core';
import { HandoverMessageTableService } from '../../../services/handover-message-table-service';
import { MainPagedHandoverMessageResponseMainHandoverMessageRow } from '../../../core/api-client-v2';

@Component({
  selector: 'app-handover-details-dialog-v2',
  imports: [
    MatDialogContent,
    MatButtonModule,
    MatIcon,
    MatListModule,
    HighlightPipe,
    TranslateModule,
    MatDialogActions,
    MatDialogClose,
  ],
  templateUrl: './handover-details-dialog-v2.html',
  styleUrl: './handover-details-dialog-v2.scss',
})
export class HandoverDetailsDialogV2 {
  protected dialogData = inject<Signal<string[]>>(MAT_DIALOG_DATA);
  protected dataService = inject(HandoverMessageTableService);
  protected messageData = this.dataService.detailMessage;
  protected mainMessage = computed(() => this.dataService.detailMessage()[0]);
  protected secondaryMessages = computed(
    () => this.dataService.detailMessage()[1]?.secondary_messages,
  );
  constructor() {
    this.messageData()[0]?.location_names;
  }
  toDatetime(timestamp: string) {
    return new Date(timestamp);
  }

  toMainMessage(
    data: MainPagedHandoverMessageResponseMainHandoverMessageRow | undefined,
  ): MainPagedHandoverMessageResponseMainHandoverMessageRow {
    if (data == undefined) {
      return {
        ID: -1,
        creator_id: -1,
        creator_name: '',
        location_ids: [],
        location_names: [],
        message_type_ids: [],
        message_type_names: [],
        shift_id: -1,
        shift_name: '',
        timestamp: '',
      };
    }
    return data;
  }
  prevRow() {
    this.dataService.prevIndex();
  }
  nextRow() {
    this.dataService.nextIndex();
  }
}
