import { computed, inject, Injectable, signal, Signal, WritableSignal } from '@angular/core';
import { AuthService } from './auth-service';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { of, switchMap, tap } from 'rxjs';
import { AuthSystemService, EmployeeData } from '../core/api-client-v2';
import { CurrentUserLookupProvider } from '../core/contracts/current-user-infra/current-user-service.provider';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class CurrentUserLookupService implements CurrentUserLookupProvider {
  authAPi = inject(AuthSystemService);
  auth = inject(AuthService);
  translate = inject(TranslateService);

  private loginStatus$ = toObservable(this.auth.isAuthenticated);
  _currentUser = toSignal(
    this.loginStatus$.pipe(
      switchMap((loginStatus) => {
        if (loginStatus) {
          return this.authAPi.apiV3AuthMeGet().pipe(
            tap((profile) => {
              switch (profile.localization) {
                case 'Chinese':
                  this.translate.use('zh');
                  break;
                case 'Vietnamese':
                  this.translate.use('vi');
                  break;
                default:
                  this.translate.use('en');
                  break;
              }
            }),
          );
        } else {
          return of(null);
        }
      }),
    ),
  );

  currentUser = computed(() => {
    if (this._currentUser() !== null && this._currentUser() !== undefined) {
      return this._currentUser() as EmployeeData;
    } else {
      return {
        ID: 0,
        name: '',
        localization: '',
        company_email: '',
        date_of_employment: '',
        deleted: false,
      };
    }
  });
  avatarUrl = computed(() => '');

  getCurrentUser(): Signal<EmployeeData> {
    return this.currentUser;
  }
}
