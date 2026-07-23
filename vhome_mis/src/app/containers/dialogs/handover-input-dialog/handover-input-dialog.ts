import { Component, inject, Signal, signal, WritableSignal } from '@angular/core';
import { EmployeeData } from '../../../core/api-client-v2';
import { CurrentUserLookupService } from '../../../services/current-user-lookup-service';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerToggle,
} from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatTimepickerModule } from '@angular/material/timepicker';
import { MatOption, MatSelect } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { TranslatePipe } from '@ngx-translate/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBar } from '@angular/material/progress-bar';
import { HandoverSystemService } from '../../../core/api-client-v2';
import { FilterOption } from '../../../core/contracts/filter-infra/filter-service.provider';

export interface SubMessageForm {
  messageType: FormControl<FilterOption>;
  messageBody: FormControl<string>;
}

// 2. Define the strict layout for the master metadata container
export interface MessageFormSchema {
  date: FormControl<Date>;
  time: FormControl<Date>;
  creator: FormControl<FilterOption>;
  shift: FormControl<FilterOption>;
  locations: FormControl<FilterOption[]>;
  // This array can ONLY hold FormGroups that strictly match our child interface
  secondaryMessages: FormArray<FormGroup<SubMessageForm>>;
}

@Component({
  selector: 'app-handover-input-dialog',
  imports: [
    MatDialogModule,
    MatFormField,
    MatLabel,
    MatDatepicker,
    MatDatepickerToggle,
    MatFormFieldModule,
    MatInputModule,
    MatTimepickerModule,
    FormsModule,
    MatDatepickerInput,
    MatDividerModule,
    MatSelect,
    MatOption,
    MatButtonModule,
    MatListModule,
    ReactiveFormsModule,
    MatIconModule,
    TranslatePipe,
    MatButtonToggleModule,
    MatProgressBar,
  ],
  templateUrl: './handover-input-dialog.html',
  providers: [provideNativeDateAdapter()],
  styleUrl: './handover-input-dialog.scss',
})
export class HandoverInputDialog {
  currentUserLookup = inject(CurrentUserLookupService);
  handoverSerivce = inject(HandoverSystemService);
  currentUser: Signal<EmployeeData> = signal({
    ID: 0,
    name: '',
    localization: '',
    company_email: '',
    date_of_employment: '',
    deleted: false,
  });
  availableEmployees: WritableSignal<FilterOption[]> = signal([]);
  availableShifts: WritableSignal<FilterOption[]> = signal([]);
  availableLocations: WritableSignal<FilterOption[]> = signal([]);
  availableMessageTypes: WritableSignal<FilterOption[]> = signal([]);
  messageForm!: FormGroup<MessageFormSchema>;
  isSubmitting = signal(false);
  private dialogRef = inject(MatDialogRef<HandoverInputDialog>);

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.currentUser = this.currentUserLookup.getCurrentUser();
    this.messageForm = this.fb.group<MessageFormSchema>({
      date: this.fb.control<Date>(new Date(Date.now()), {
        nonNullable: true,
        validators: Validators.required,
      }),
      time: this.fb.control<Date>(new Date(Date.now()), {
        nonNullable: true,
        validators: Validators.required,
      }),
      creator: this.fb.control<FilterOption>(
        { ID: -1, name: '' },
        { nonNullable: true, validators: [Validators.required, this.optionSelectValidator()] },
      ),
      shift: this.fb.control<FilterOption>(
        { ID: -1, name: '' },
        { nonNullable: true, validators: [Validators.required, this.optionSelectValidator()] },
      ),
      locations: this.fb.control<FilterOption[]>([], {
        nonNullable: true,
        validators: Validators.required,
      }),
      secondaryMessages: this.fb.array<FormGroup<SubMessageForm>>([]),
    });
    this.handoverSerivce.apiV3HandoverFilterOptionGet('EMPLOYEE').subscribe((response) => {
      this.availableEmployees.set(response.data_rows);
      for (const emp of this.availableEmployees()) {
        if (emp.ID == this.currentUser().ID) {
          this.messageForm.get('creator')?.setValue(emp);
          break;
        }
      }
    });
    this.handoverSerivce.apiV3HandoverFilterOptionGet('FLOORS').subscribe((response) => {
      this.availableLocations.set(response.data_rows);
    });
    this.handoverSerivce.apiV3HandoverFilterOptionGet('SHIFTS').subscribe((response) => {
      this.availableShifts.set(response.data_rows);
    });
    this.handoverSerivce.apiV3HandoverFilterOptionGet('MESSAGETYPE').subscribe((response) => {
      this.availableMessageTypes.set(response.data_rows);
    });
    this.addSecondary();
  }

  addSecondary() {
    const newMsg = this.fb.group({
      messageType: this.fb.control<FilterOption>(
        { ID: -1, name: '' },
        { nonNullable: true, validators: [Validators.required, this.optionSelectValidator()] },
      ),
      messageBody: this.fb.control<string>('', {
        nonNullable: true,
        validators: Validators.required,
      }),
    });
    this.secondary.push(newMsg);
  }

  removeSecondary(index: number) {
    this.secondary.controls.splice(index, 1);
    this.secondary.controls.map((ctrl) => ctrl.updateValueAndValidity());
    this.messageForm.updateValueAndValidity();
  }

  get secondary(): FormArray<FormGroup<SubMessageForm>> {
    return this.messageForm.controls.secondaryMessages;
  }

  submitMessage() {
    if (this.messageForm.invalid) {
      this.messageForm.markAllAsTouched();
      return;
    }
    const s = this.messageForm.getRawValue();
    this.isSubmitting.set(true);
    this.messageForm.disable();
    this.handoverSerivce
      .apiV3HandoverNewHandoverMessagePost({
        creator: s.creator,
        datetime: this.combineDateAndTime(s.date, s.time).toISOString(),
        locations: s.locations,
        secondary_data: s.secondaryMessages.map((val) => {
          return { message_body: val.messageBody, message_type: val.messageType };
        }),
        shift: s.shift,
      })
      .subscribe({
        next: (response) => {
          console.log('Data received successfully');
          this.dialogRef.close();
        },
        error: (error) => {
          console.error('An error occurred:', error);
        },
      });
  }

  protected combineDateAndTime(dateSource: Date, timeSource: Date): Date {
    // 1. Create a brand-new instance to avoid mutating form state by reference
    const combined = new Date(dateSource.getTime());

    // 2. Extract clock units from the time source and inject them into the clone
    combined.setHours(
      timeSource.getHours(),
      timeSource.getMinutes(),
      timeSource.getSeconds(),
      timeSource.getMilliseconds(),
    );
    return combined;
  }

  optionSelectValidator(): ValidatorFn {
    return (control: AbstractControl<FilterOption>): ValidationErrors | null => {
      const value = control.value;
      // Return null if valid, or an error object if invalid
      return value.ID === -1 ? { restrictedSelection: { invalidValue: value } } : null;
    };
  }
}
