import { Component, input, output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LoginErrorStateMatcher } from '../login-panel-v2/login-panel-v2';
import { AuthData } from '../../services/auth-service';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-mobile-login-panel',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinner,
  ],
  templateUrl: './mobile-login-panel.html',
  styleUrl: './mobile-login-panel.scss',
})
export class MobileLoginPanel {
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
