import { Component, inject, signal } from '@angular/core';
import { AuthData, AuthService } from '../../services/auth-service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginPanelV2 } from '../../components/login-panel-v2/login-panel-v2';
import { LayoutService } from '../../services/layout-service';
import { MobileLoginPanel } from "../../components/mobile-login-panel/mobile-login-panel";

@Component({
  selector: 'app-login-page',
  imports: [LoginPanelV2, MobileLoginPanel],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPage {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  layoutService = inject(LayoutService);

  protected authService = inject(AuthService);
  protected errorMessage = signal<string | null>(null);
  protected isLoading = signal(false);

  onLoginAttempt(credentials: AuthData) {
    this.isLoading.set(true);
    this.errorMessage.set(null);

    this.authService.login(credentials).subscribe({
      next: () => {
        this.isLoading.set(false);
        // 🟢 The smart container safely evaluates routing context!
        const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        console.log('LOGIN SUCCESS', returnUrl);
        this.router.navigateByUrl(returnUrl);
      },
      error: (err) => {
        this.isLoading.set(false);
        // Map backend errors cleanly to pass into the UI layer
        this.errorMessage.set(err.error?.message || 'Invalid credentials.');
        throw err;
      },
    });
  }
}
