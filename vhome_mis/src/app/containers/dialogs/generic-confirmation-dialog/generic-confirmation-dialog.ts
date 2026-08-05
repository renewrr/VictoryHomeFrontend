import { Component, HostListener, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { R } from '@angular/cdk/keycodes';

export interface ConfirmationDialogData {
  title: string;
  message: string;
  confirmText?: string; // Defaults to 'Confirm'
  cancelText?: string; // Defaults to 'Cancel'
  color?: 'primary' | 'accent' | 'warn'; // Allows changing button styling dynamically
}

@Component({
  selector: 'app-generic-confirmation-dialog',
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './generic-confirmation-dialog.html',
  styleUrl: './generic-confirmation-dialog.scss',
})
export class GenericConfirmationDialog {
  // Inject Material Dialog helpers cleanly
  protected dialogRef = inject(MatDialogRef<GenericConfirmationDialog>);
  protected data: ConfirmationDialogData = inject(MAT_DIALOG_DATA);

  // Fallback defaults if optional fields aren't provided
  protected confirmText = this.data.confirmText || 'Confirm';
  protected cancelText = this.data.cancelText || 'Cancel';
  protected color = this.data.color || 'primary';

  // Shortcut for ENTER -> Confirm
  @HostListener('keydown.enter', ['$event'])
  onEnterKey(event: Event): void {
    const kbEvent = event as KeyboardEvent;
    kbEvent.preventDefault(); // Prevents accidental duplicate submissions
    this.confirm();
  }

  // Shortcut for ESC -> Cancel
  @HostListener('keydown.escape', ['$event'])
  onEscapeKey(event: Event): void {
    const kbEvent = event as KeyboardEvent;
    kbEvent.preventDefault();
    this.cancel();
  }

  confirm(): void {
    this.dialogRef.close(true);
  }

  cancel(): void {
    this.dialogRef.close(false);
  }
}
