import { Component, computed, inject, output, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatBadgeModule } from '@angular/material/badge';
import { HandoverInputDialog } from '../../containers/dialogs/handover-input-dialog/handover-input-dialog';
import { MatDialog } from '@angular/material/dialog';
import { SecondaryMessageTableService } from '../../services/secondary-message-table-service';
import { AuthService } from '../../services/auth-service';

export interface NavItem {
  label: string;
  subtitle: string;
  icon: string;
  route: string;
  badge?: number;
}

@Component({
  selector: 'app-sidenav',
  imports: [
    RouterLink,
    RouterLinkActive,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatBadgeModule,
  ],
  templateUrl: './sidenav.html',
  styleUrl: './sidenav.scss',
})
export class Sidenav {
  readonly toggleCollapse = output<void>();
  protected dialogService = inject(MatDialog);
  protected messageService = inject(SecondaryMessageTableService);
  protected auth = inject(AuthService);

  readonly navItems = computed<NavItem[]>(() => {
    let routes = [
      {
        label: '主頁面',
        subtitle: '員工基本資料',
        icon: 'dynamic_feed',
        route: '/home',
      },
      {
        label: '交班系統',
        subtitle: '交班訊息與紀錄',
        icon: 'assignment',
        route: '/handover',
        badge:
          this.messageService.dailyMessageLength() > 0
            ? this.messageService.dailyMessageLength()
            : undefined,
      },
    ];
    if (this.auth.isManagementPrivilege()) {
      routes = routes.concat([
        {
          label: '人員管理系統',
          subtitle: '服務使用者與同工訊管理',
          icon: 'management',
          route: '/management',
        },
        {
          label: '場域管理系統',
          subtitle: '建築物、樓層與住宿房間管理',
          icon: 'apartment',
          route: '/buildingManagement',
        },
      ]);
    }
    return routes;
  });

  summonNewMessageDialog() {
    this.dialogService
      .open(HandoverInputDialog, {
        // Highly responsive config for a dense data-entry form
        width: '750px',
        maxWidth: '90vw',
        height: 'auto',
        maxHeight: '85vh',
      })
      .afterClosed()
      .subscribe(() => {});
  }
}
