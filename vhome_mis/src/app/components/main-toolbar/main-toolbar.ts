import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthService } from '../../services/auth-service';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-main-toolbar',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    MatListModule,
    MatFormFieldModule,
    TranslatePipe,
  ],
  templateUrl: './main-toolbar.html',
  styleUrl: './main-toolbar.scss',
})
export class MainToolbar {
  authService = inject(AuthService);
  router = inject(Router);
  logout() {
    this.authService.logout();
  }
  handover() {
    this.router.navigateByUrl('/handover');
  }
  mainPage() {
    this.router.navigateByUrl('/');
  }
  management_page() {
    this.router.navigateByUrl('/management');
  }
  buildingManagement() {
    this.router.navigateByUrl('/buildingManagement');
  }
}
