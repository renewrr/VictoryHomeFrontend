import { Component, inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { SecondaryHandoverMessageResponseSecondaryHandoverMessageRow } from '../../core/api-client-v2';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FilterLookupService } from '../../services/filter-lookup-service';

@Component({
  selector: 'app-mobile-edit-sheet',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
  ],
  templateUrl: './mobile-edit-sheet.html',
  styleUrl: './mobile-edit-sheet.scss',
})
export class MobileEditSheet {
  private sheetRef = inject(MatBottomSheetRef<MobileEditSheet>);
  private data = inject<{ message: SecondaryHandoverMessageResponseSecondaryHandoverMessageRow }>(
    MAT_BOTTOM_SHEET_DATA,
  );
  private filterService = inject(FilterLookupService);
  protected availableMessageTypes = this.filterService.getDropdownOptions('MESSAGETYPE');

  // Clone data to avoid mutating original state before save confirmation
  editableMessage!: SecondaryHandoverMessageResponseSecondaryHandoverMessageRow;
  isConfirmingDelete = false; // ⚡ Toggles inline confirm view

  ngOnInit() {
    this.editableMessage = structuredClone(this.data.message);
  }

  save() {
    for (const opt of this.availableMessageTypes()) {
      if (this.editableMessage.message_type_id === opt.ID) {
        this.editableMessage.message_type_name = opt.name;
      }
    }
    this.sheetRef.dismiss({
      ID: this.editableMessage.ID,
      is_deleted: false,
      message_body: this.editableMessage.message_body,
    });
  }

  delete() {
    this.sheetRef.dismiss({
      ID: this.editableMessage.ID,
      is_deleted: true,
      message_body: this.editableMessage.message_body,
    });
  }

  close() {
    this.sheetRef.dismiss(null);
  }
}
