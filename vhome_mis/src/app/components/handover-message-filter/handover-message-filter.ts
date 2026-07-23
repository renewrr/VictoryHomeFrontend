import { Component } from '@angular/core';

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
})
export class HandoverMessageFilter {}
