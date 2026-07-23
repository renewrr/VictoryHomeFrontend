import { Pipe, PipeTransform, ChangeDetectorRef, OnDestroy, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Pipe({
  name: 'translateWithFallback',
  pure: false, // 1. 🟢 CRUCIAL: Tells Angular to re-evaluate this pipe on change detection
  standalone: true
})
export class TranslateWithFallbackPipe implements PipeTransform, OnDestroy {
  private translate = inject(TranslateService);
  private cdr = inject(ChangeDetectorRef);
  private langChangeSub: Subscription;

  constructor() {
    // 2. 🟢 CRUCIAL FOR ON-PUSH: Force the host component to check for changes
    // the exact millisecond the user switches languages.
    this.langChangeSub = this.translate.onLangChange.subscribe(() => {
      this.cdr.markForCheck();
    });
  }

  transform(key: string, fallbackText: string, interpolateParams?: any): string {
    if (!key) return '';
    
    // Pull the text synchronously from the active language cache
    const result = this.translate.instant(key, interpolateParams);
    
    // If ngx-translate returns the key itself, it means the translation is missing
    return result === key ? fallbackText : result;
  }

  ngOnDestroy() {
    // 3. Clean up the subscription when the component/pipe is destroyed
    if (this.langChangeSub) {
      this.langChangeSub.unsubscribe();
    }
  }
}