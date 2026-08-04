import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  private breakpointObserver = inject(BreakpointObserver);

  // Observable for async pipe
  readonly isMobile$ = this.breakpointObserver
    .observe([Breakpoints.Handset, '(max-width: 599.98px)'])
    .pipe(map((result) => result.matches));

  // Signal version for Angular 16+ template control flow (@if)
  readonly isMobile = toSignal(this.isMobile$, { initialValue: false });
}
