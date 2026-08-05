import { Component, HostListener, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-two-factor-dialog',
  imports: [MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule],
  templateUrl: './two-factor-dialog.html',
  styleUrl: './two-factor-dialog.scss',
})
export class TwoFactorDialog {
  private dialogRef = inject(MatDialogRef<TwoFactorDialog>);

  // Local UI state using standard Angular signals
  protected verificationCode = signal<string>('');

  // Shortcut for ENTER -> Confirm
  @HostListener('keydown.enter', ['$event'])
  onEnterKey(event: Event): void {
    const kbEvent = event as KeyboardEvent;
    kbEvent.preventDefault(); // Prevents accidental duplicate submissions
    this.onVerify();
  }

  // Shortcut for ESC -> Cancel
  @HostListener('keydown.escape', ['$event'])
  onEscapeKey(event: Event): void {
    const kbEvent = event as KeyboardEvent;
    kbEvent.preventDefault();
    this.onCancel();
  }

  onVerify() {
    // 🟢 Close the modal and pass the code up to the TwoFactorService stream
    this.dialogRef.close(this.verificationCode());
  }

  onCancel() {
    this.dialogRef.close(null);
  }
}
