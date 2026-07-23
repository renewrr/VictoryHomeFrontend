import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ManagementBuildingService } from '../../../services/management-building-service';

@Component({
  selector: 'app-new-building-dialog',
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  templateUrl: './new-building-dialog.html',
  styleUrl: './new-building-dialog.scss',
})
export class NewBuildingDialog {
  private fb = inject(FormBuilder);
  private buildingService = inject(ManagementBuildingService);
  private dialogRef = inject(MatDialogRef<NewBuildingDialog>);
  protected isSubmitting = signal<boolean>(false);
  protected errorMessage = signal<string | null>(null);

  protected buildingForm = this.fb.nonNullable.group({
    name: ['', [Validators.required]],
    address: ['', [Validators.required]],
  });

  protected onSave(): void {
    if (this.buildingForm.invalid) return;
    this.isSubmitting.set(true);
    // Grab pristine form data
    const payload = this.buildingForm.getRawValue();
    this.buildingService.newBuilding(payload).subscribe({
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
