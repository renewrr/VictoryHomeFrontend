import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, EMPTY, lastValueFrom, throwError } from 'rxjs';
import { SnackbarService } from '../services/snackbar-service';
import { AuthService } from '../services/auth-service';
import { TwoFactorService } from '../services/two-factor-service';

let isRedirecting = false;

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  const snackbar = inject(SnackbarService);
  const authService = inject(AuthService);
  const twoFactorService = inject(TwoFactorService);
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      console.log(error);
      if (isRedirecting) {
        return EMPTY;
      }
      switch (error.status) {
        case 401:
          isRedirecting = true;
          if (error.error.message == 'LOGIN_FAILED') {
            snackbar.msgSnack('登入訊息錯誤');
          }
          if (error.error.msg == 'Token has been revoked') {
            snackbar.msgSnack('登入已過期，請重新登入');
          }
          router.navigate(['/login']).then(
            () => {
              isRedirecting = false;
            },
            () => {
              isRedirecting = false;
            },
          );
          authService.forcedLogout();
          break;
        case 403:
          if (error.error.message == 'TWO_FACTOR_STEP_UP_CHALLENGE_FAILED') {
            isRedirecting = true;
            snackbar.msgSnack('二次驗證失敗');
            router.navigate(['/']).then(
              () => {
                isRedirecting = false;
              },
              () => {
                isRedirecting = false;
              },
            );
          } else if (
            error.error.message == 'No required privilege, contact management for more info.'
          ) {
            isRedirecting = true;
            snackbar.msgSnack('無權限使用此功能');
            router.navigate(['/']).then(
              () => {
                isRedirecting = false;
              },
              () => {
                isRedirecting = false;
              },
            );
          } else if (error.error.message == 'NO_ACCOUNT_IN_RECORD') {
            isRedirecting = true;
            snackbar.msgSnack('查無登入資訊');
            router.navigate(['/login']).then(
              () => {
                isRedirecting = false;
              },
              () => {
                isRedirecting = false;
              },
            );
            authService.logout();
          } else if (
            error.error.message ==
            'Step-up authentication required. Please complete the 2FA challenge.'
          ) {
            twoFactorService.promptFor2Fa().subscribe((response) => {
              if (response) {
                const upgradedPriv = req.clone({});
                return next(upgradedPriv);
              }
              return throwError(() => error);
            });
          }
          break;
        default:
          isRedirecting = true;
          snackbar.msgSnack('未知錯誤');
          router.navigate(['/']).then(
            () => {
              isRedirecting = false;
            },
            () => {
              isRedirecting = false;
            },
          );
          break;
      }
      return throwError(() => error);
    }),
  );
};
