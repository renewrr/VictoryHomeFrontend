import { computed, inject, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import {
  FilterMultiSelectLookupProvider,
  FilterOption,
} from '../core/contracts/filter-infra/filter-service.provider';
import { HandoverSystemService } from '../core/api-client-v2';

@Injectable({
  providedIn: 'root',
})
export class FilterLookupService implements FilterMultiSelectLookupProvider {
  // public option_maps = signal<Record<string, FilterOption[]>>({});
  public optionMaps: Record<string, WritableSignal<FilterOption[]>> = {};
  private handoverService = inject(HandoverSystemService);

  constructor() {
    this.refreshFilterOptions();
  }

  /**
   * Kick off the initialization parameters from the server
   */

  public loadFilterConfigurations(id_tag: string, filter_data: FilterOption[]) {
    if (!(id_tag in this.optionMaps)) {
      this.optionMaps[id_tag] = signal([]);
    }
    this.optionMaps[id_tag].set(filter_data);
    // this.option_maps.update((current_data) => ({ ...current_data, [id_tag]: filter_data }));
  }

  public getDropdownOptions(id_tag: string) {
    if (!(id_tag in this.optionMaps)) {
      this.optionMaps[id_tag] = signal([]);
    }
    return this.optionMaps[id_tag];
  }

  public refreshFilterOptions() {
    for (const filter_tags of ['FLOORS', 'SHIFTS', 'EMPLOYEE', 'SERVICEUSER', 'MESSAGETYPE']) {
      this.handoverService
        .apiV3HandoverFilterOptionGet(
          filter_tags as 'FLOORS' | 'SHIFTS' | 'EMPLOYEE' | 'SERVICEUSER' | 'MESSAGETYPE',
        )
        .subscribe((data) => {
          this.loadFilterConfigurations(filter_tags, data.data_rows);
        });
    }
  }
}
