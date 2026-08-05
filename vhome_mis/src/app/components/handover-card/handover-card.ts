import { Component, inject, Input, input, signal, Signal } from '@angular/core';
import { SecondaryHandoverMessageResponseSecondaryHandoverMessageRow } from '../../core/api-client-v2';
import { DatePipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { LocalizationService } from '../../services/localization-service';
import { TranslateModule } from '@ngx-translate/core';
import { HighlightPipe } from '../../pipes/highlight/highlight-pipe';

@Component({
  selector: 'app-handover-card',
  imports: [TranslateModule, MatIconModule, HighlightPipe],
  templateUrl: './handover-card.html',
  styleUrl: './handover-card.scss',
})
export class HandoverCard {
  // Modern Signal Input (Angular 17.1+)
  readonly card = input.required<SecondaryHandoverMessageResponseSecondaryHandoverMessageRow>();
  protected localization = inject(LocalizationService);
  @Input() highlightText: Signal<string[]> = signal([]);
  toDatetime(timestamp: string) {
    return new Date(timestamp);
  }
}
