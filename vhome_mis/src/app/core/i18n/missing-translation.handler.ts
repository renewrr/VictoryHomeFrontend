// src/app/core/i18n/missing-translation.handler.ts
import { MissingTranslationHandler, MissingTranslationHandlerParams } from '@ngx-translate/core';

export class CustomMissingTranslationHandler implements MissingTranslationHandler {
  handle(params: MissingTranslationHandlerParams): string {
    // 1. Check if the template explicitly passed a 'default' parameter
    if (
      params.interpolateParams &&
      typeof params.interpolateParams === 'object' &&
      'default' in params.interpolateParams
    ) {
      return (params.interpolateParams as { default: string })['default'];
    }

    // 2. Fallback: If no custom fallback is provided, return the key itself
    return params.key;
  }
}
