import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-search-bar-filter',
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatChipsModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  templateUrl: './search-bar-filter.html',
  styleUrl: './search-bar-filter.scss',
})
export class SearchBarFilter {
  @Input() label: string = '篩選';
  @Input() idTag: string = 'Default';
  @Output() selectionChanged = new EventEmitter<[string, string[]]>();

  readonly keywords = signal<string[]>([]);
  readonly formControl = new FormControl(['angular']);

  removeKeyword(keyword: string) {
    this.keywords.update((keywords) => {
      const index = keywords.indexOf(keyword);
      if (index < 0) {
        return keywords;
      }

      keywords.splice(index, 1);
      return [...keywords];
    });
    this.selectionChanged.emit([this.idTag, this.keywords()]);
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our keyword
    if (value) {
      this.keywords.update((keywords) => [...keywords, value]);
    }

    // Clear the input value
    event.chipInput!.clear();
    this.selectionChanged.emit([this.idTag, this.keywords()]);
  }
}
