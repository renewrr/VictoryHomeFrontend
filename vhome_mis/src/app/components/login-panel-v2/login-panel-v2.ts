import { Component, input, output } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormsModule,
  FormGroupDirective,
  NgForm,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { AuthData } from '../../services/auth-service';

export class LoginErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login-panel-v2',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatProgressSpinner,
  ],
  templateUrl: './login-panel-v2.html',
  styleUrl: './login-panel-v2.scss',
})
export class LoginPanelV2 {
  isLoading = input<boolean>(false);
  errorMessage = input<string | null>(null);
  matcher = new LoginErrorStateMatcher();

  loginSubmit = output<AuthData>();

  loginForm = new FormGroup({
    account: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    password: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    totp: new FormControl(''),
  });

  onSubmit() {
    if (this.loginForm.valid) {
      const s = this.loginForm.getRawValue();
      this.loginSubmit.emit(this.loginForm.getRawValue());
    }
  }
}
