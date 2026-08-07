import { Component, output, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatBadgeModule } from '@angular/material/badge';

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
  readonly createHandover = output<void>();
  readonly toggleCollapse = output<void>();

  readonly navItems = signal<NavItem[]>([
    {
      label: 'Feed',
      subtitle: 'Live shift stream',
      icon: 'dynamic_feed',
      route: '/feed',
    },
    {
      label: 'Tasks',
      subtitle: 'Assigned to you',
      icon: 'assignment',
      route: '/tasks',
      badge: 3,
    },
    {
      label: 'Shift Logs',
      subtitle: 'Search history',
      icon: 'history_edu',
      route: '/logs',
    },
  ]);
}
