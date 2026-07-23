import { inject, Injectable } from '@angular/core';
import { AuthService } from './auth-service';
import { MatDialog } from '@angular/material/dialog';
import { catchError, map, Observable, switchMap, tap, throwError } from 'rxjs';
import { TwoFactorDialog } from '../containers/dialogs/two-factor-dialog/two-factor-dialog';
import { AuthSystemService } from '../core/api-client-v2';

@Injectable({
  providedIn: 'root',
})
export class TwoFactorService {
  private dialog = inject(MatDialog);
  private authSystemService = inject(AuthSystemService)
  private authService = inject(AuthService); // 🟢 Injected to update state

  promptFor2Fa(): Observable<boolean> {
    const dialogRef = this.dialog.open(TwoFactorDialog, {
      disableClose: true,
      width: '400px',
    });

    return dialogRef.afterClosed().pipe(
      switchMap((code: string | null) => {
        if (!code) {
          return throwError(() => new Error('2FA_CANCELLED'));
        }
        return this.authSystemService.apiV3AuthTwoFactorStepUpPost(code);
      }),
      tap((response) => {
        this.authService.update2FaStatus(true);
      }),
      map(() => true),
      catchError((err) => {
        return throwError(() => err);
      }),
    );
  }
}
