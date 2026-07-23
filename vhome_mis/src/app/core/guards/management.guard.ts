import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../services/auth-service';
import { inject } from '@angular/core';
import { TwoFactorService } from '../../services/two-factor-service';
import { SnackbarService } from '../../services/snackbar-service';
import { catchError, map, of } from 'rxjs';

export const managementGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const twoFactorService = inject(TwoFactorService);
  const snackbar = inject(SnackbarService);
  if (authService.isManagementPrivilege()) {
    if (authService.is2FaVerified()) {
      return true;
    }

    return twoFactorService.promptFor2Fa().pipe(
      map(() => true),
      catchError(() => {
        // Has privilege but failed two-factor, go back to dashboard
        snackbar.msgSnack('二次驗證失敗');
        return of(router.createUrlTree(['/'], { queryParams: { returnUrl: state.url } }));
      }),
    );
  } else {
    // No privilege, go back to dashboard
    snackbar.msgSnack('無使用此功能之權限');
    return router.createUrlTree(['/'], { queryParams: { returnUrl: state.url } });
  }
};
