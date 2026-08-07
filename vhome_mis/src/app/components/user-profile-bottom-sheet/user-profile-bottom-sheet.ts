import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CurrentUserLookupService } from '../../services/current-user-lookup-service';

@Component({
  selector: 'app-user-profile-bottom-sheet',
  imports: [RouterLink, MatIconModule, MatListModule],
  templateUrl: './user-profile-bottom-sheet.html',
  styleUrl: './user-profile-bottom-sheet.scss',
})
export class UserProfileBottomSheet {
  private readonly bottomSheetRef = inject(MatBottomSheetRef<UserProfileBottomSheet>);
  private userServcie = inject(CurrentUserLookupService);
  currentUser = this.userServcie.currentUser;
  nickname = computed(() => {
    return this.currentUser().name.slice(-2);
  });

  dismiss(): void {
    this.bottomSheetRef.dismiss();
  }

  logout(): void {
    this.bottomSheetRef.dismiss();
    // Auth logout logic
  }
}
