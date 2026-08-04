import {
  ApplicationConfig,
  inject,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import {
  provideRouter,
  RouteReuseStrategy,
  withComponentInputBinding,
  withViewTransitions,
} from '@angular/router';

import { routes } from './app.routes';
import { HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './interceptors/auth-interceptor';
import { CustomRouteReuseStrategy } from './routing/custom-route-reuse-strategy';
import {
  MissingTranslationHandler,
  provideTranslateService,
  TranslateLoader,
  TranslateService,
  TranslationObject,
} from '@ngx-translate/core';
import { forkJoin, map, Observable } from 'rxjs';
import { AuthService } from './services/auth-service';
import { credentialsInterceptor } from './interceptors/credentials-interceptor';
import { CustomMissingTranslationHandler } from './core/i18n/missing-translation.handler';
import { BASE_PATH } from './core/api-client-v2';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withComponentInputBinding(), withViewTransitions()),
    { provide: RouteReuseStrategy, useClass: CustomRouteReuseStrategy },
    provideHttpClient(withInterceptors([authInterceptor, credentialsInterceptor])),
    provideTranslateService({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => new CustomMultiTranslateLoader(http, ['./i18n']),
        deps: [HttpClient],
      },
      fallbackLang: 'en',
      missingTranslationHandler: {
        provide: MissingTranslationHandler,
        useClass: CustomMissingTranslationHandler,
      },
    }),
    provideAppInitializer(() => {
      const authService = inject(AuthService);
      return authService.bootstrapAuthSession();
    }),
    {provide: BASE_PATH, useValue: environment.apiURL}
  ],
};

export class CustomMultiTranslateLoader implements TranslateLoader {
  constructor(
    private http: HttpClient,
    private folders: string[],
  ) {}

  public getTranslation(lang: string) {
    // 1. Create a network call array for every distinct folder suffix layout
    const requests: Observable<TranslationObject>[] = this.folders.map((folder) => {
      // Point natively to your individual JSON asset tables
      return this.http.get<TranslationObject>(`${folder}/${lang}.json`);
    });

    // 2. Execute all network requests concurrently and stitch the objects together
    return forkJoin(requests).pipe(
      map((responseArrays) => {
        return responseArrays.reduce((acc, current) => {
          return { ...acc, ...current }; // Merge feature keys with global keys safely
        }, {});
      }),
    );
  }
}
