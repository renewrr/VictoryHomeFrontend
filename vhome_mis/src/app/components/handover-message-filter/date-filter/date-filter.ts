import { Component, EventEmitter, inject, Injectable, Input, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateAdapter, provideNativeDateAdapter } from '@angular/material/core';
import {
  DateRange,
  MAT_DATE_RANGE_SELECTION_STRATEGY,
  MatDatepickerModule,
  MatDateRangeSelectionStrategy,
} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

// DEPRECATED
@Injectable()
export class ReverseDateRangeSelectionStrategy<D> implements MatDateRangeSelectionStrategy<D> {
  private _dateAdapter = inject<DateAdapter<D>>(DateAdapter<D>);

  selectionFinished(date: D | null, currentRange: DateRange<D> | null): DateRange<D> {
    return this._createReversibleDate(date, currentRange);
  }

  createPreview(activeDate: D | null, currentRange: DateRange<D> | null): DateRange<D> {
    return this._createReversibleDate(activeDate, currentRange);
  }

  private _createReversibleDate(date: D | null, currentRange: DateRange<D> | null): DateRange<D> {
    if (date && currentRange) {
      if (currentRange.start) {
        if (currentRange.end) {
          return new DateRange<D>(date, null);
        } else {
          if (date < currentRange.start) {
            return new DateRange<D>(date, currentRange.start);
          } else {
            return new DateRange<D>(currentRange.start, date);
          }
        }
      } else {
        return new DateRange<D>(date, null);
      }
    } else {
      return new DateRange<D>(null, null);
    }
  }
}

@Injectable()
export class ReversibleDateSelectionStrategy<D> implements MatDateRangeSelectionStrategy<D> {
  // 🚀 Inject the framework's adapter to safely compare ANY date library (Date, Moment, Luxon)
  private _dateAdapter = inject<DateAdapter<D>>(DateAdapter<D>);

  /**
   * Fires explicitly when a user CLICKS a cell
   */
  selectionFinished(date: D | null, currentRange: DateRange<D>): DateRange<D> {
    if (!date) return currentRange;

    const { start, end } = currentRange;

    // If no start date exists yet, OR a full range is already completed, start a new range session
    if (!start || end) {
      return new DateRange<D>(date, null);
    }

    // A start date exists, but no end date yet: Apply reversal logic checks
    const isBeforeStart = this._dateAdapter.compareDate(date, start) < 0;

    return isBeforeStart
      ? new DateRange<D>(date, start) // ↩️ Reverse selection swap
      : new DateRange<D>(start, date); // Standard linear selection
  }

  /**
   * Fires continuously when a user HOVERS their mouse over calendar cells
   */
  createPreview(activeDate: D | null, currentRange: DateRange<D>): DateRange<D> {
    if (!activeDate) return new DateRange<D>(null, null);

    const { start, end } = currentRange;

    // 💡 FIX: If a selection is already completed, do NOT render a preview on hover
    if (!start || end) {
      return new DateRange<D>(null, null);
    }

    // Dynamically draw the reverse or forward preview block matching their mouse location
    const isBeforeStart = this._dateAdapter.compareDate(activeDate, start) < 0;

    return isBeforeStart
      ? new DateRange<D>(activeDate, start)
      : new DateRange<D>(start, activeDate);
  }
}

@Component({
  selector: 'app-date-filter',
  providers: [
    {
      provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
      useClass: ReversibleDateSelectionStrategy,
    },
    provideNativeDateAdapter(),
  ],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './date-filter.html',
  styleUrl: './date-filter.scss',
})
export class DateFilter {
  readonly range = new FormGroup({
    // TODO: Change the way how the start date starts at the previous day works. The current -86400000 milsec method seems odd.
    start: new FormControl<Date | null>(new Date(Date.now() - 86400000)),
    end: new FormControl<Date | null>(new Date()),
  });
  @Input() label: string = '篩選';
  @Input() id_tag: string = 'Default';
  @Output() selection_changed = new EventEmitter<[string, Date, Date]>();

  constructor() {
    this.range.valueChanges.subscribe((range) => {
      const start_date = range.start ?? new Date(Date.now() - 86400000);
      const end_date = range.end ?? new Date(Date.now());
      this.selection_changed.emit([this.id_tag, start_date, end_date]);
    });
  }
}
