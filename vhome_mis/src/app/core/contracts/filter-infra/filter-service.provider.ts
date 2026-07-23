import { InjectionToken, Signal } from '@angular/core';


export interface FilterOption {
  ID: number;
  name: string;
}

export interface FilterMultiSelectLookupProvider {
  getDropdownOptions(select_type: string): Signal<FilterOption[]>;
}

// A generic key Angular can look up at runtime
export const FILTER_MULTI_SELECT_LOOKUP_TOKEN = new InjectionToken<FilterMultiSelectLookupProvider>('FilterMultiSelectLookupProvider');