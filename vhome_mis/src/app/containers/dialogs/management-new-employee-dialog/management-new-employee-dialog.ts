import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  Validators,
  ReactiveFormsModule,
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { EmployeeStateService } from '../../../services/employee-state-service';

export interface newEmployeeData {
  name: FormControl<string>;
  email: FormControl<string | null>;
  account: FormControl<string | null>;
  password: FormControl<string | null>;
  hasTwoFactor: FormControl<boolean>;
}

@Component({
  selector: 'app-management-new-employee-dialog',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './management-new-employee-dialog.html',
  styleUrl: './management-new-employee-dialog.scss',
})
export class ManagementNewEmployeeDialog {
  employeeForm!: FormGroup<newEmployeeData>;
  employeeService = inject(EmployeeStateService);
  private dialogRef = inject(MatDialogRef<ManagementNewEmployeeDialog>);
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.employeeForm = this.fb.group<newEmployeeData>(
      {
        name: this.fb.control<string>('', {
          nonNullable: true,
          validators: Validators.required,
        }),
        email: this.fb.control<string>(''),
        account: this.fb.control<string>(''),
        password: this.fb.control<string>(''),
        hasTwoFactor: this.fb.control<boolean>(false, {
          nonNullable: true,
          validators: Validators.required,
        }),
      },
      { validators: this.accountAndPasswordValidator() },
    );
  }
  sendData() {
    this.employeeService.addEmployee(this.employeeForm).subscribe({
      next: (response) => {
        console.log('Data received successfully');
        this.dialogRef.close();
      },
      error: (error) => {
        console.error('An error occurred:', error);
      },
    });
  }

  accountAndPasswordValidator(): ValidatorFn {
    // 1. Accept the generic AbstractControl, which will represent the FormGroup
    return (control: AbstractControl): ValidationErrors | null => {
      // 2. Extract the sibling controls safely using .get()
      const accountControl = control.get('account');
      const passwordControl = control.get('password');

      // Safety guard if controls aren't mounted yet
      if (!accountControl || !passwordControl) {
        return null;
      }

      const accountValue = accountControl.value;
      const passwordValue = passwordControl.value;

      // 3. Apply your conditional business logic
      // Checking for falsy values captures both null, undefined, and empty strings ''
      if (!accountValue && passwordValue) {
        return { passwordWithoutAccount: true };
      }

      if (accountValue && !passwordValue) {
        return { accountWithoutPassword: true };
      }

      return null; // Both are empty, or both are filled -> Valid!
    };
  }
}
