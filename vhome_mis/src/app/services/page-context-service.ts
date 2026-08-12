// core/services/page-context.service.ts
import { Injectable, inject } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PageContextService {
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);

  /**
   * Signal containing the active page title, updated automatically on route change.
   */
  readonly currentPageTitle = toSignal(
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.getDeepestRouteData(this.activatedRoute)),
      map((data) => data['pageTitle'] ?? 'Portal'),
    ),
    { initialValue: 'Portal' },
  );

  readonly hideSidenav = toSignal(
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.getDeepestRouteData(this.activatedRoute)),
      map((data) => !!data['hideSidenav']),
    ),
    { initialValue: false },
  );

  /**
   * Helper to traverse nested route children to find the deepest route's data snapshot.
   */
  private getDeepestRouteData(route: ActivatedRoute): Record<string, any> {
    let currentRoute = route;
    while (currentRoute.firstChild) {
      currentRoute = currentRoute.firstChild;
    }
    return currentRoute.snapshot.data;
  }
}
