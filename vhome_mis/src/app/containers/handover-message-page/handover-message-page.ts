import { Component, computed, inject, signal, WritableSignal } from '@angular/core';
import { HandoverMessageFilter } from '../../components/handover-message-filter/handover-message-filter';
import { MultiSelectFilter } from '../../components/handover-message-filter/multi-select-filter/multi-select-filter';
import { DateFilter } from '../../components/handover-message-filter/date-filter/date-filter';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { HandoverInputDialog } from '../dialogs/handover-input-dialog/handover-input-dialog';
import { MatButtonModule } from '@angular/material/button';
import { CurrentUserLookupService } from '../../services/current-user-lookup-service';
import { SecondaryMessageTableService } from '../../services/secondary-message-table-service';
import { SecondaryMessageTableV2 } from '../../components/secondary-message-table-v2/secondary-message-table-v2';
import { HandoverMessageTableService } from '../../services/handover-message-table-service';
import { HandoverMessageTableV2 } from '../../components/handover-message-table-v2/handover-message-table-v2';
import { HandoverDetailsDialogV2 } from '../dialogs/handover-details-dialog-v2/handover-details-dialog-v2';
import { FilterStateService } from '../../services/filter-state-service';
import { HandoverSystemService, ServiceUserSystemService } from '../../core/api-client-v2';
import { FilterOption } from '../../core/contracts/filter-infra/filter-service.provider';
import { SearchBarFilter } from '../../components/handover-message-filter/search-bar-filter/search-bar-filter';
import { LayoutService } from '../../services/layout-service';
import { MobileHandoverPanel } from '../../components/mobile-handover-panel/mobile-handover-panel';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-handover-message-page',
  imports: [
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    HandoverMessageFilter,
    MultiSelectFilter,
    DateFilter,
    SecondaryMessageTableV2,
    HandoverMessageTableV2,
    SearchBarFilter,
    MobileHandoverPanel,
    MatExpansionModule,
  ],
  templateUrl: './handover-message-page.html',
  styleUrl: './handover-message-page.scss',
})
export class HandoverMessagePage {
  handoverService = inject(HandoverSystemService);
  serviceUserService = inject(ServiceUserSystemService);
  dialogService = inject(MatDialog);
  handoverDataService = inject(HandoverMessageTableService);
  secondaryDataService = inject(SecondaryMessageTableService);
  filterStateService = inject(FilterStateService);
  currentUserSerivce = inject(CurrentUserLookupService);
  layoutService = inject(LayoutService);

  highlightText = computed(() => {
    const newHighlight: string[] = [];
    for (const uid of this.filterStateService.state().serviceUserIds ?? []) {
      newHighlight.push(this.current_service_user_list[uid]);
      if (this.current_service_user_nicknames[uid] != undefined) {
        for (const nn of this.current_service_user_nicknames[uid]) {
          newHighlight.push(nn);
        }
      }
    }
    for (const keyword of this.filterStateService.state().keywords) {
      newHighlight.push(keyword);
    }
    return newHighlight;
  });
  current_service_user_list: Record<number, string> = {};
  current_service_user_nicknames: Record<number, string[]> = [];

  multiFilterSignals: Record<string, WritableSignal<FilterOption[]>> = {
    MESSAGETYPE: signal<FilterOption[]>([]),
    SERVICEUSER: signal<FilterOption[]>([]),
    SHIFTS: signal<FilterOption[]>([]),
    FLOORS: signal<FilterOption[]>([]),
    EMPLOYEE: signal<FilterOption[]>([]),
  };

  filter_config = computed(() => {
    if (this.layoutService.isMobile()) {
      return [
        { id_tag: 'DATE', label: '篩選日期', type_config: { type: 'date' } },
        {
          id_tag: 'MESSAGETYPE',
          label: '篩選訊息類別',
          type_config: { type: 'multi' },
          translate_config: { prefix: 'HANDOVER_MESSAGE.MESSAGETYPE' },
        },
        {
          id_tag: 'FLOORS',
          label: '篩選樓層',
          type_config: { type: 'multi' },
          translate_config: { prefix: 'HANDOVER_MESSAGE.FLOORS' },
        },
        { id_tag: 'KEYWORDS', label: '篩選關鍵字', type_config: { type: 'keyword' } },
      ];
    } else {
      return [
        { id_tag: 'DATE', label: '篩選日期', type_config: { type: 'date' } },
        {
          id_tag: 'MESSAGETYPE',
          label: '篩選訊息類別',
          type_config: { type: 'multi' },
          translate_config: { prefix: 'HANDOVER_MESSAGE.MESSAGETYPE' },
        },
        { id_tag: 'SERVICEUSER', label: '篩選服務使用者', type_config: { type: 'multi' } },
        {
          id_tag: 'SHIFTS',
          label: '篩選班別',
          type_config: { type: 'multi' },
          translate_config: { prefix: 'HANDOVER_MESSAGE.SHIFTS' },
        },
        {
          id_tag: 'FLOORS',
          label: '篩選樓層',
          type_config: { type: 'multi' },
          translate_config: { prefix: 'HANDOVER_MESSAGE.FLOORS' },
        },
        { id_tag: 'EMPLOYEE', label: '篩選交班者', type_config: { type: 'multi' } },
        { id_tag: 'KEYWORDS', label: '篩選關鍵字', type_config: { type: 'keyword' } },
      ];
    }
  });

  ngOnInit() {
    const nextDay = new Date(Date.now());
    nextDay.setHours(0, 0, 0, 0);
    const prevDay = new Date(Date.now() - 86400000);
    prevDay.setHours(0, 0, 0, 0);

    this.filterStateService.patchDateFilter(prevDay, nextDay, 'DATE');

    this.refreshFilterOptions();
    this.loadServiceUserData();
  }

  private loadServiceUserData() {
    this.handoverService.apiV3HandoverFilterOptionGet('SERVICEUSER').subscribe((data) => {
      const all_user: Record<number, string> = {};
      for (const row of data.data_rows) {
        all_user[row.ID] = row.name;
      }
      this.current_service_user_list = all_user;
    });
    this.serviceUserService.apiV3ServiceuserFlatServiceUserNicknamesGet().subscribe((data) => {
      const all_user: Record<number, string[]> = {};
      for (const row of data.data_rows) {
        if (all_user[row.service_user_id] == undefined) {
          all_user[row.service_user_id] = [];
        }
        all_user[row.service_user_id].push(row.nickname);
      }
      this.current_service_user_nicknames = all_user;
    });
  }

  on_selection_change([id_tag, selected_options]: [string, FilterOption[]]) {
    this.filterStateService.patchSelectFilters(selected_options, id_tag);
  }

  on_date_selection_change([id_tag, start_date, end_date]: [string, Date, Date]) {
    this.filterStateService.patchDateFilter(start_date, end_date, id_tag);
  }

  onKeywordChange([idTag, keywords]: [string, string[]]) {
    this.filterStateService.patchKeywordFilter(keywords, idTag);
  }

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
      .subscribe(() => {
        this.refreshTable();
      });
  }

  refreshFilterOptions() {
    for (const filter_data of this.filter_config()) {
      if (filter_data.type_config.type == 'multi') {
        this.handoverService
          .apiV3HandoverFilterOptionGet(
            filter_data.id_tag as 'FLOORS' | 'SHIFTS' | 'EMPLOYEE' | 'SERVICEUSER',
          )
          .subscribe((data) => {
            this.multiFilterSignals[filter_data.id_tag].set(data.data_rows);
          });
      }
    }
  }

  refreshTable() {
    this.loadServiceUserData();
    this.handoverDataService.tableRefresh();
    this.secondaryDataService.tableRefresh();
    this.refreshFilterOptions();
  }

  summnonDetailDialog() {
    this.dialogService
      .open(HandoverDetailsDialogV2, {
        data: signal([]),
        width: '750px',
        maxWidth: '90vw',
        height: 'auto',
        maxHeight: '85vh',
      })
      .afterClosed()
      .subscribe(() => {
        this.handoverDataService.deselectIndex();
      });
  }
}
