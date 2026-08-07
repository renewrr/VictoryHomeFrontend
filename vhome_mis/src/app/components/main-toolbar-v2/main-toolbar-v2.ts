import { Component, computed, inject, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CurrentUserLookupService } from '../../services/current-user-lookup-service';
import { PageContextService } from '../../services/page-context-service';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-main-toolbar-v2',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatDividerModule, MatMenuModule],
  templateUrl: './main-toolbar-v2.html',
  styleUrl: './main-toolbar-v2.scss',
})
export class MainToolbarV2 {
  readonly toggleSidenav = output<void>();
  userService = inject(CurrentUserLookupService);
  pageContext = inject(PageContextService);
  authService = inject(AuthService);
  userNickname = computed(() => {
    return this.userService.currentUser().name.slice(-2);
  });
  onRefresh() {}
  onLogout() {
    this.authService.logout();
  }
}
