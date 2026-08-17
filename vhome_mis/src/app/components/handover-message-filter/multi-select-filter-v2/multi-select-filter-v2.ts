import {
  Component,
  computed,
  ElementRef,
  EventEmitter,
  inject,
  Input,
  Output,
  signal,
  Signal,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {
  MatAutocompleteSelectedEvent,
  MatAutocompleteModule,
  MatAutocompleteTrigger,
} from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { AsyncPipe } from '@angular/common';
import { FilterOption } from '../../../core/contracts/filter-infra/filter-service.provider';
import { TranslateConfig } from '../../../core/contracts/i18n-infra/TranslateConifg';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { map, Observable, startWith } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-multi-select-filter-v2',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatIconModule,
    AsyncPipe,
    TranslatePipe,
  ],
  templateUrl: './multi-select-filter-v2.html',
  styleUrl: './multi-select-filter-v2.scss',
})
export class MultiSelectFilterV2 {
  private translateService = inject(TranslateService);
  // Track language changes as a Signal to force computed() re-evaluation when language switches
  currentLang = toSignal(this.translateService.onLangChange, { initialValue: null });

  @Input() label: string = '篩選';
  @Input() id_tag: string = 'Default';
  @Input() translate_config: TranslateConfig | undefined;
  @Input({ required: true }) availableOptions!: Signal<FilterOption[]>;

  selectedOptions = signal<FilterOption[]>([]);
  @Output() selection_changed = new EventEmitter<[string, FilterOption[]]>();

  @ViewChild('optionInput') optionInput!: ElementRef<HTMLInputElement>;
  @ViewChild(MatAutocompleteTrigger) autoTrigger!: MatAutocompleteTrigger;

  searchCtrl = new FormControl('');
  searchQuery = toSignal(this.searchCtrl.valueChanges, { initialValue: '' });
  translationPrefix = computed(() => {
    return this.translate_config?.prefix;
  });

  // Computed signal that filters against translated labels
  filteredOptions = computed(() => {
    // Register dependency on language switch signal
    this.currentLang();

    const options = this.availableOptions() || [];
    const selected = this.selectedOptions() || [];
    const query = (this.searchQuery() || '').toLowerCase().trim();
    const prefix = this.translationPrefix();

    const selectedIds = new Set(selected.map((item) => item.ID));

    return options.filter((option) => {
      const isNotSelected = !selectedIds.has(option.ID);

      // Resolve the actual localized string using TranslateService
      const translationKey = prefix ? `${prefix}.${option.name}` : option.name;
      const translatedLabel = this.translateService.instant(translationKey).toLowerCase();

      return isNotSelected && translatedLabel.includes(query);
    });
  });

  onFocus(): void {
    this.autoTrigger.openPanel();
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    const selectedOption: FilterOption = event.option.value;
    const currentSelected = this.selectedOptions();

    if (selectedOption && !currentSelected.some((item) => item.ID === selectedOption.ID)) {
      const updated = [...currentSelected, selectedOption];
      this.selectedOptions.set(updated);
      this.selection_changed.emit([this.id_tag, updated]);
    }

    this.optionInput.nativeElement.value = '';
    this.searchCtrl.setValue('');

    requestAnimationFrame(() => {
      this.autoTrigger.openPanel();
    });
  }

  remove(option: FilterOption): void {
    const updated = this.selectedOptions().filter((item) => item.ID !== option.ID);
    this.selectedOptions.set(updated);
    this.selection_changed.emit([this.id_tag, updated]);
    this.searchCtrl.setValue(this.optionInput.nativeElement.value);
  }
}
