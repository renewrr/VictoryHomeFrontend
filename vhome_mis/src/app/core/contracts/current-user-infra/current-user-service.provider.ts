import { InjectionToken, Signal } from '@angular/core';
import { EmployeeData } from '../../api-client-v2';


export interface CurrentUserLookupProvider {
  getCurrentUser(): Signal<EmployeeData>;
}

// A generic key Angular can look up at runtime
export const CURRENT_USER_LOOKUP_TOKEN = new InjectionToken<CurrentUserLookupProvider>('CurrentUserLookupProvider');