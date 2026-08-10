import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDatepicker, MatDatepickerInput, MatDatepickerToggle } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressBar } from '@angular/material/progress-bar';
import { MatOption, MatSelect } from '@angular/material/select';
import { MatTimepickerModule } from '@angular/material/timepicker';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-handover-input-dialog-v2',
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
  templateUrl: './handover-input-dialog-v2.html',
  styleUrl: './handover-input-dialog-v2.scss',
})
export class HandoverInputDialogV2 {}
