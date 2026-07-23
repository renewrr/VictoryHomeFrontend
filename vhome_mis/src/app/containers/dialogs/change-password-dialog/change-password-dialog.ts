// features/profile/change-password-dialog/change-password-dialog.component.ts
import { Component, inject, signal } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PersonnelSystemService } from '../../../core/api-client-v2';

export function passwordsMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const newPassword = control.get('newPassword')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (!newPassword || !confirmPassword) return null;

    return newPassword === confirmPassword ? null : { passwordsMismatch: true };
  };
}

@Component({
  selector: 'app-change-password-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  templateUrl: './change-password-dialog.html',
  styles: [
    `
      .full-width {
        width: 100%;
        margin-bottom: 12px;
      }
    `,
  ],
})
export class ChangePasswordDialog {
  private fb = inject(FormBuilder);
  private personnelService = inject(PersonnelSystemService);
  private dialogRef = inject(MatDialogRef<ChangePasswordDialog>);

  // UI state tracking via Signals
  protected hideCurrent = signal<boolean>(true);
  protected hideNew = signal<boolean>(true);
  protected isSubmitting = signal<boolean>(false);
  protected errorMessage = signal<string | null>(null);

  // Initialize the secure form group
  protected passwordForm = this.fb.nonNullable.group(
    {
      currentPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    },
    {
      validators: [passwordsMatchValidator()],
    },
  );

  protected onSave(): void {
    if (this.passwordForm.invalid) return;

    this.isSubmitting.set(true);
    this.errorMessage.set(null);

    // Grab pristine form data
    const payload = this.passwordForm.getRawValue();
    console.log(payload);
    this.personnelService
      .apiV3PersonnelPasswordChangePatch({
        old_password: payload.currentPassword,
        new_password: payload.newPassword,
        confirm_password: payload.confirmPassword,
      })
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
