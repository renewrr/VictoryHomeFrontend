import { computed, inject, Injectable, signal } from '@angular/core';
import { SnackbarService } from './snackbar-service';
import { Router } from '@angular/router';
import { catchError, firstValueFrom, map, of, switchMap, tap } from 'rxjs';
import { AuthSystemService, HandoverSystemService } from '../core/api-client-v2';
import { TranslateService } from '@ngx-translate/core';

export interface AuthData {
  account: string;
  password: string;
  totp: string | null | undefined;
}

interface UserState {
  isAuthenticated: boolean;
  is2FaVerified: boolean;
  hasManagementPrivilege: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authAPi = inject(AuthSystemService);
  handoverApi = inject(HandoverSystemService);
  translate = inject(TranslateService)

  snackbar = inject(SnackbarService);
  router = inject(Router);

  private _userState = signal<UserState>({
    isAuthenticated: false,
    is2FaVerified: false,
    hasManagementPrivilege: false,
  });

  public isAuthenticated = computed(() => this._userState().isAuthenticated);
  public is2FaVerified = computed(() => this._userState().is2FaVerified);
  public isManagementPrivilege = computed(() => this._userState().hasManagementPrivilege);

  bootstrapAuthSession(): Promise<boolean> {
    return firstValueFrom(
      this.authAPi.apiV3AuthAuthMeGet().pipe(
        tap((response) => {
          this._userState.set({
            is2FaVerified: response.is_2fa_verified,
            isAuthenticated: response.authenticated,
            hasManagementPrivilege: response.management_privilege,
          });
        }),
        map(() => true),
        catchError(() => {
          return of(false);
        }),
      ),
    );
  }

  forcedLogout() {
    this.resetUser();
  }

  login(authData: AuthData) {
    if (authData.totp) {
      return this.authAPi
        .apiV3AuthLoginWithTotpPost(authData.account, authData.password, authData.totp)
        .pipe(
          tap((response) => {
            if (response.status) {
              this._userState.set({
                is2FaVerified: response.is_2fa_verified,
                isAuthenticated: response.authenticated,
                hasManagementPrivilege: response.management_privilege,
              });
            } else {
              this.snackbar.msgSnack('登入失敗');
              this.resetUser();
            }
          }),
        );
    } else {
      return this.authAPi.apiV3AuthLoginNoTotpPost(authData.account, authData.password).pipe(
        tap((response) => {
          if (response.status) {
            this._userState.set({
              is2FaVerified: response.is_2fa_verified,
              isAuthenticated: response.authenticated,
              hasManagementPrivilege: response.management_privilege,
            });
          } else {
            this.snackbar.msgSnack('登入失敗');
            this.resetUser();
          }
        }),
      );
    }
  }

  logout() {
    this.authAPi.apiV3AuthLogoutPost().subscribe((response) => {
      this.resetUser();
      this.router.navigateByUrl('/login');
    });
  }

  update2FaStatus(status: boolean) {
    this._userState.update((current) => ({ ...current, is2FaVerified: status }));
  }

  private resetUser() {
    this.translate.use('zh')
    this._userState.set({
      isAuthenticated: false,
      is2FaVerified: false,
      hasManagementPrivilege: false,
    });
  }
}
