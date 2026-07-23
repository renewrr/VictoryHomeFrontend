import { computed, inject, Injectable, signal } from '@angular/core';
import {
  FilterMultiSelectLookupProvider,
  FilterOption,
} from '../core/contracts/filter-infra/filter-service.provider';

@Injectable({
  providedIn: 'root',
})
export class FilterLookupService implements FilterMultiSelectLookupProvider {
  public option_maps = signal<Record<string, FilterOption[]>>({});

  /**
   * Kick off the initialization parameters from the server
   */

  public loadFilterConfigurations(id_tag: string, filter_data: FilterOption[]) {
    this.option_maps.update((current_data) => ({ ...current_data, [id_tag]: filter_data }));
  }

  public getDropdownOptions(id_tag: string) {
    return computed(() => this.option_maps()[id_tag]);
  }

  public refreshFilterOptions() {}
}
