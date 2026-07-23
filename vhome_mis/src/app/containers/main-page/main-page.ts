import { Component, computed, inject, signal } from '@angular/core';
import { CurrentUserLookupService } from '../../services/current-user-lookup-service';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { AuthService } from '../../services/auth-service';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ChangePasswordDialog } from '../dialogs/change-password-dialog/change-password-dialog';

@Component({
  selector: 'app-main-page',
  imports: [MatCardModule, MatIconModule, TranslateModule, MatButtonModule],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {
  currentUserService = inject(CurrentUserLookupService);
  authService = inject(AuthService);
  private dialog = inject(MatDialog);
  protected imageLoadFailed = signal<boolean>(false);
  private snackBar = inject(MatSnackBar);
  locale = computed(() => this.currentUserService.currentUser().localization);

  protected handleImageError(): void {
    this.imageLoadFailed.set(true);
  }


  protected openPasswordDialog(): void {
    const dialogRef = this.dialog.open(ChangePasswordDialog, {
      width: '420px',
      disableClose: true, // Forces user to click 'Cancel' explicitly, protecting input states
    });

    // 🤝 Handle the modal closing result sequence
    dialogRef.afterClosed().subscribe((didSaveSuccess) => {
      if (didSaveSuccess) {
        this.snackBar.open('密碼更新成功', '關閉', {
          duration: 4000,
          horizontalPosition: 'end',
          verticalPosition: 'bottom',
        });
      }
    });
  }
}
