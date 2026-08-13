import { CanActivateFn, Router, Routes } from '@angular/router';
import { inject } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import { AuthService } from './services/auth-service';
import { TwoFactorService } from './services/two-factor-service';
import { SnackbarService } from './services/snackbar-service';
import { handoverResolver } from './resolvers/handover-resolver';
import { managementResolver } from './resolvers/management-resolver';

export const authGuard: CanActivateFn = async (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (authService.isAuthenticated()) {
    return true;
  } else {
    return router.createUrlTree(['login/'], { queryParams: { returnUrl: state.url } });
  }
};

export const managementGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const twoFactorService = inject(TwoFactorService);
  const snackbar = inject(SnackbarService);
  if (authService.isManagementPrivilege()) {
    if (authService.is2FaVerified()) {
      return true;
    }

    return twoFactorService.promptFor2Fa().pipe(
      map(() => true),
      catchError(() => {
        // Has privilege but failed two-factor, go back to dashboard
        snackbar.msgSnack('二次驗證失敗');
        return of(router.createUrlTree(['/'], { queryParams: { returnUrl: state.url } }));
      }),
    );
  } else {
    // No privilege, go back to dashboard
    snackbar.msgSnack('無使用此功能之權限');
    return router.createUrlTree(['/'], { queryParams: { returnUrl: state.url } });
  }
};

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    pathMatch: 'full',
    loadComponent() {
      return import('./containers/home/home').then((m) => m.Home);
    },
    canActivate: [authGuard],
    data: { reuse: true, pageTitle: '主頁面' },
  },
  {
    path: 'login',
    pathMatch: 'full',
    loadComponent() {
      // return import('./login-page/login-page').then((m) => m.LoginPage);
      return import('./containers/login-page/login-page').then((m) => m.LoginPage);
    },
    data: { reuse: false, pageTitle: '登入頁面', hideSidenav: true },
  },
  {
    path: 'handover',
    pathMatch: 'full',
    loadComponent() {
      return import('./containers/handover-message-page/handover-message-page').then(
        (m) => m.HandoverMessagePage,
      );
    },
    canActivate: [authGuard],
    data: { reuse: true, pageTitle: '交班系統' },
    resolve: {
      handoverResolver,
    },
  },

  {
    path: 'behavioral',
    pathMatch: 'full',
    loadComponent() {
      return import('./components/behavioral-report/behavioral-report').then(
        (m) => m.BehavioralReport,
      );
    },
    canActivate: [authGuard],
    data: { reuse: true, pageTitle: '行為觀察記錄表' },
  },

  {
    path: 'management',
    pathMatch: 'full',
    loadComponent() {
      return import('./containers/management-page/management-page').then((m) => m.ManagementPage);
    },
    canActivate: [authGuard, managementGuard],
    data: { reuse: true, pageTitle: '人員管理系統' },
    resolve: {
    },
  },

  {
    path: 'buildingManagement',
    loadComponent() {
      return import('./containers/building-management-page/building-management-page').then(
        (m) => m.BuildingManagementPage,
      );
    },
    canActivate: [authGuard, managementGuard],
    data: { reuse: true, pageTitle: '場域管理系統' },
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./components/building-view/building-view').then((m) => m.BuildingView),
        canActivate: [authGuard],
        data: { reuse: true, pageTitle: '場域管理系統' },
      },
      {
        path: 'building/:buildingId',
        loadComponent: () =>
          import('./components/building-details/building-details').then((m) => m.BuildingDetails),
        canActivate: [authGuard],
        data: { reuse: true, pageTitle: '場域管理系統' },
      },
      {
        path: 'building/:buildingId/floor/:floorId',
        loadComponent: () =>
          import('./components/floor-details/floor-details').then((m) => m.FloorDetails),
        canActivate: [authGuard],
        data: { reuse: true, pageTitle: '場域管理系統' },
      },
      {
        path: 'building/:buildingId/floor/:floorId/room/:roomId',
        loadComponent: () =>
          import('./components/room-details/room-details').then((m) => m.RoomDetails),
        canActivate: [authGuard],
        data: { reuse: true, pageTitle: '場域管理系統' },
      },
    ],
  },
];
