import { Component, inject } from '@angular/core';
import { LayoutService } from '../../services/layout-service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

export interface TableFilter {
  start_date?: Date;
  end_date?: Date;
  service_user_ids?: number[];
  shifts?: string[];
  locations?: string[];
  creator_ids?: number[];
  message_type_ids?: number[];
}

@Component({
  selector: 'app-handover-message-filter',
  imports: [],
  templateUrl: './handover-message-filter.html',
  styleUrl: './handover-message-filter.scss',
  host: {
    // Dynamically adds/removes the 'is-mobile' CSS class on <app-filter-wrapper>
    '[class.is-mobile]': 'isMobile()',
    '[class.is-desktop]': '!isMobile()',
  },
})
export class HandoverMessageFilter {
  layoutService = inject(LayoutService);
  readonly isMobile = this.layoutService.isMobile;
}
