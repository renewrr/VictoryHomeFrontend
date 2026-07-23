import { Component, Inject, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ManagementBuildingService } from '../../../services/management-building-service';

export interface DialogData {
  buildingId: number;
}

@Component({
  selector: 'app-new-floor-dialog',
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  templateUrl: './new-floor-dialog.html',
  styleUrl: './new-floor-dialog.scss',
})
export class NewFloorDialog {
  private fb = inject(FormBuilder);
  private buildingService = inject(ManagementBuildingService);
  private dialogRef = inject(MatDialogRef<NewFloorDialog>);
  protected isSubmitting = signal<boolean>(false);
  protected errorMessage = signal<string | null>(null);

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  protected floorForm = this.fb.nonNullable.group({
    name: ['', [Validators.required]],
  });

  protected onSave(): void {
    if (this.floorForm.invalid) return;
    this.isSubmitting.set(true);
    // Grab pristine form data
    const payload = this.floorForm.getRawValue();
    this.buildingService
      .newFloor({ name: payload.name, building_id: this.data.buildingId })
      .subscribe({
        next: () => {
          this.isSubmitting.set(false);
          // 🟢 Close the dialog and pass 'true' back to the dashboard to show a success toast
          this.dialogRef.close(true);
        },
        error: (err) => {
          this.isSubmitting.set(false);
          this.errorMessage.set(err.error?.message || '更新失敗，請確認舊密碼輸入正確。');
        },
      });
  }
}
