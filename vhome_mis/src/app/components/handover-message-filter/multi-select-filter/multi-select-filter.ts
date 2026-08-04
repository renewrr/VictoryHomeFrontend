import { Component, EventEmitter, Input, Output, Signal } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { TranslateConfig } from '../../../core/contracts/i18n-infra/TranslateConifg';
import { FilterOption } from '../../../core/contracts/filter-infra/filter-service.provider';

@Component({
  selector: 'app-multi-select-filter',
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatChipsModule,
    MatIconModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
  templateUrl: './multi-select-filter.html',
  styleUrl: './multi-select-filter.scss',
})
export class MultiSelectFilter {
  @Input() label: string = '篩選';
  @Input() id_tag: string = 'Default';
  @Input() translate_config: TranslateConfig | undefined;
  @Input({ required: true }) available_options!: Signal<FilterOption[]>;

  selected_options = new FormControl<FilterOption[]>([], { nonNullable: true });
  @Output() selection_changed = new EventEmitter<[string, FilterOption[]]>();

  constructor() {
    this.selected_options.valueChanges.subscribe((opts) => {
      this.selection_changed.emit([this.id_tag, opts]);
    });
  }

  remove(option: FilterOption) {
    const new_selected: FilterOption[] = [];
    for (const o of this.selected_options.value) {
      if (o.ID != option.ID) {
        new_selected.push(o);
      }
    }
    this.selected_options.setValue(new_selected);
  }
}
