import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'highlight',
  standalone: true,
  pure: true,
})
export class HighlightPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string, searchTerms: string[]): SafeHtml | string {
    if (!value || !searchTerms || searchTerms.length === 0) return value;
    const sortedTerms = [...searchTerms].sort((a, b) => b.length - a.length);

    // 1. Force Angular to escape any malicious HTML code in the original text
    let escapedText = value
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;');

    // 2. Escape special regex characters in your search terms to prevent crash
    const cleanTerms = sortedTerms
      .map((term) => term.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'))
      .filter((term) => term.trim() !== '');

    if (cleanTerms.length === 0) return escapedText;

    // 3. Combine keywords into a single regex statement
    const regex = new RegExp(`(${cleanTerms.join('|')})`, 'gi');

    // 4. Inject the safe html marks
    const highlighted = escapedText.replace(regex, '<mark class="custom-highlight">$1</mark>');

    // 5. Bypass security ONLY because we manually cleansed the input in Step 1
    return this.sanitizer.bypassSecurityTrustHtml(highlighted);
  }
}
