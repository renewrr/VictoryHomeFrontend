import { Component, computed, inject, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LayoutService } from '../../services/layout-service';
import { CurrentUserLookupService } from '../../services/current-user-lookup-service';
import { AuthService } from '../../services/auth-service';
import { ChangePasswordDialog } from '../dialogs/change-password-dialog/change-password-dialog';

export interface QuickAction {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  route?: string;
  externalLink?: string;
  badge?: string;
  color: string; // Background color tint for icon box
  badgeColor?: string;
}

export interface UserProfile {
  name: string;
  role: string;
  department: string;
  email: string;
  avatarUrl?: string;
}

@Component({
  selector: 'app-home',
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule, MatRippleModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private router = inject(Router);
  private dialog = inject(MatDialog);
  private snackBar = inject(MatSnackBar);
  private userService = inject(CurrentUserLookupService);
  private authService = inject(AuthService);
  protected layout = inject(LayoutService);
  protected verStr = computed(() => {
    if (this.layout.isMobile()) {
      return 'Mobile';
    } else {
      return 'Desktop';
    }
  });

  // Mock User - Replace with your Auth/User Store
  user: Signal<UserProfile> = computed(() => {
    return {
      name: this.userService.currentUser().name,
      role: '教保員',
      department: '生輔照護組',
      email: this.userService.currentUser().company_email,
    };
  });

  // ⚡ EXPANDABLE GRID: Add new feature tiles here as your app grows
  quickActions: Signal<QuickAction[]> = computed(() => {
    const actions: Array<QuickAction> = [
      {
        id: 'handover',
        title: '交班系統',
        subtitle: '閱讀及新增交班紀錄',
        icon: 'assignment',
        route: '/handover',
        badge: '運作中',
        color: '#e0f2fe', // Soft blue
      },
      {
        id: 'behaviour',
        title: '行為觀察記錄表',
        subtitle: '服務對象行為紀錄追蹤',
        icon: 'edit_note',
        externalLink:
          'https://docs.google.com/forms/d/1_DhEkZMrDHkuso9-FJfrjNYlYa0aqpORQlcWnWMQBVM/edit',
        badge: '外部連結',
        color: '#e0f2fe', // Soft blue
      },
    ];
    if (this.authService.isManagementPrivilege()) {
      let badgeStr: string = '需要二次認證';
      if (this.authService.is2FaVerified()) {
        badgeStr = '運作中';
      }
      actions.push({
        id: 'management',
        title: '人員管理系統',
        subtitle: '服務使用者與同工資料管理',
        icon: 'management',
        route: '/management',
        badge: badgeStr,
        color: '#e0f2fe',
      });
      actions.push({
        id: 'buildingManagement',
        title: '場域管理系統',
        subtitle: '樓層與住宿場域管理',
        icon: 'apartment',
        route: '/buildingManagement',
        badge: badgeStr,
        color: '#e0f2fe',
      });
    }
    return actions;
  });

  onActionClick(action: QuickAction) {
    if (action.route) {
      this.router.navigate([action.route]);
    } else if (action.externalLink) {
      window.open(action.externalLink, '_blank', 'noopener,noreferrer');
    } else {
      this.snackBar.open(`${action.title} 尚在開發中！`, '關閉  ', { duration: 2500 });
    }
  }

  onChangePassword() {
    const dialogRef = this.dialog.open(ChangePasswordDialog, {
      width: '420px',
      disableClose: true, // Forces user to click 'Cancel' explicitly, protecting input states
    });

    // 🤝 Handle the modal closing result sequence
    dialogRef.afterClosed().subscribe((didSaveSuccess) => {
      if (didSaveSuccess) {
        this.snackBar.open('密碼更新成功', '關閉', {
          duration: 4000,
          horizontalPosition: 'end',
          verticalPosition: 'bottom',
        });
      }
    });
  }

  onLogout() {
    // Execute logout logic
    this.snackBar.open('正在登出...', '', { duration: 1500 });
    this.authService.logout();
  }
}
