import { Component, inject, signal } from '@angular/core';
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
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressBar } from '@angular/material/progress-bar';
import { MatOption, MatSelect } from '@angular/material/select';
import { MatTimepickerModule } from '@angular/material/timepicker';
import { TranslatePipe } from '@ngx-translate/core';
import { FilterOption } from '../../../core/contracts/filter-infra/filter-service.provider';
import { HandoverSystemService } from '../../../core/api-client-v2';
import { FilterLookupService } from '../../../services/filter-lookup-service';
import { CurrentUserLookupService } from '../../../services/current-user-lookup-service';
import {
  MessageFormSchema,
  minLengthValidator,
  optionSelectValidator,
  SubMessageForm,
} from '../handover-input-dialog-v2/handover-input-dialog-v2';

@Component({
  selector: 'app-mobile-handover-input-dialog',
  imports: [
    MatDialogModule,
    MatFormField,
    MatLabel,
    MatFormFieldModule,
    MatInputModule,
    MatTimepickerModule,
    FormsModule,
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
  templateUrl: './mobile-handover-input-dialog.html',
  styleUrl: './mobile-handover-input-dialog.scss',
})
export class MobileHandoverInputDialog {
  filterService = inject(FilterLookupService);
  handoverService = inject(HandoverSystemService);
  meLookup = inject(CurrentUserLookupService);

  availableEmployees = this.filterService.getDropdownOptions('EMPLOYEE');
  availableShifts = this.filterService.getDropdownOptions('SHIFTS');
  availableLocations = this.filterService.getDropdownOptions('FLOORS');
  availableMessageTypes = this.filterService.getDropdownOptions('MESSAGETYPE');
  currentUser = this.meLookup.currentUser();
  messageForm!: FormGroup<MessageFormSchema>;
  isSubmitting = signal(false);
  private placeholder: Record<number, string> = {
    1: '服務對象身體狀況',
    2: '為何送醫，送何處，誰送',
    4: '若有損壞，請在其他項目填寫物品，並註記是否有填維修單',
    6: '非上述項目，但需要讓大家知道的 ',
  };
  private dialogRef = inject(MatDialogRef<MobileHandoverInputDialog>);
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.messageForm = this.fb.group<MessageFormSchema>({
      creator: this.fb.control<FilterOption>(
        { ID: -1, name: '' },
        { nonNullable: true, validators: [Validators.required, optionSelectValidator()] },
      ),
      shift: this.fb.control<FilterOption>(
        { ID: -1, name: '' },
        { nonNullable: true, validators: [Validators.required, optionSelectValidator()] },
      ),
      locations: this.fb.control<FilterOption[]>([], {
        nonNullable: true,
        validators: Validators.required,
      }),
      secondaryMessages: this.fb.array<FormGroup<SubMessageForm>>([], minLengthValidator()),
    });
    for (const emp of this.availableEmployees()) {
      if (emp.ID === this.currentUser.ID) {
        this.messageForm.get('creator')?.setValue(emp);
        break;
      }
    }
    this.addSecondary();
  }

  addSecondary() {
    const newMsg = this.fb.group({
      messageType: this.fb.control<FilterOption>(
        { ID: -1, name: '' },
        { nonNullable: true, validators: [Validators.required, optionSelectValidator()] },
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

  getPlaceholder(index: number) {
    if (index in this.placeholder) {
      return this.placeholder[index];
    }
    return '';
  }

  submitMessage() {
    if (this.messageForm.invalid) {
      this.messageForm.markAllAsTouched();
      return;
    }
    const s = this.messageForm.getRawValue();
    this.isSubmitting.set(true);
    this.messageForm.disable();
    this.handoverService
      .apiV3HandoverNewHandoverMessagePost({
        creator: s.creator,
        datetime: new Date().toISOString(),
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
          this.isSubmitting.set(false);
        },
      });
  }
}
