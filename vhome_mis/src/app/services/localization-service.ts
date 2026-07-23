import { computed, inject, Injectable, signal } from '@angular/core';
import { ManagementLocalizationResponseLocalization } from '../core/api-client-v2';
import { OperationsSystemService } from '../core/api-client-v2';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocalizationService {
  private translate = inject(TranslateService);

  operationService = inject(OperationsSystemService);
  supportedLocalization = signal<ManagementLocalizationResponseLocalization[]>([]);
  readonly currentLang = toSignal(
    this.translate.onLangChange.pipe(map((event: LangChangeEvent) => event.lang)),
    {
      // Fallback to currentLang or defaultLang for frame-one evaluation
      initialValue: this.translate.getCurrentLang() || this.translate.getFallbackLang() || 'en',
    },
  );
  dateLocalization = computed(() => {
    switch (this.currentLang()) {
      case 'zh':
        return 'zh-Hant';
      case 'en':
        return 'us';
      default:
        return 'vi';
    }
  });

  constructor() {
    this.operationService.apiV3OperationsSupportedLocalizationGet().subscribe((response) => {
      this.supportedLocalization.set(response.data_rows);
    });
  }
  changeLanguage(lang: string) {
    this.translate.use(lang);
  }
}
