import { Component, computed, inject, input, output } from '@angular/core';
import { MatBottomSheet, MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { PageContextService } from '../../services/page-context-service';
import { CurrentUserLookupService } from '../../services/current-user-lookup-service';
import { UserProfileBottomSheet } from '../user-profile-bottom-sheet/user-profile-bottom-sheet';

@Component({
  selector: 'app-mobile-toolbar',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatBottomSheetModule],
  templateUrl: './mobile-toolbar.html',
  styleUrl: './mobile-toolbar.scss',
})
export class MobileToolbar {
  private readonly bottomSheet = inject(MatBottomSheet);
  protected pageContext = inject(PageContextService);
  protected userService = inject(CurrentUserLookupService);

  readonly toggleSidenav = output<void>();
  readonly refreshFeed = output<void>();
  userNickname = computed(() => {
    return this.userService.currentUser().name.slice(-2);
  });

  openProfileSheet(): void {
    this.bottomSheet.open(UserProfileBottomSheet);
  }
}
