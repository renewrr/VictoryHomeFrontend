import { Injectable, signal } from '@angular/core';
import { FilterOption } from '../core/contracts/filter-infra/filter-service.provider';
import id from '@angular/common/locales/id';

export interface HandoverFilterState {
  startTime: Date;
  endTime: Date;
  messageTypeIds: number[];
  locationIds: number[];
  shiftIds: number[];
  creatorIds: number[];
  serviceUserIds: number[];
  keywords: string[];
}

@Injectable({
  providedIn: 'root',
})
export class FilterStateService {
  private _state = signal<HandoverFilterState>({
    startTime: new Date(Date.now()),
    endTime: new Date(Date.now() - 8640000),
    messageTypeIds: [],
    locationIds: [],
    shiftIds: [],
    creatorIds: [],
    serviceUserIds: [],
    keywords: [],
  });

  public state = this._state.asReadonly();

  public patchSelectFilters(filter: FilterOption[], idTag: string) {
    switch (idTag) {
      case 'FLOORS':
        this._state.update((s) => ({
          ...s,
          locationIds: filter.map((option) => Number(option.ID)),
        }));
        break;
      case 'SHIFTS':
        this._state.update((s) => ({ ...s, shiftIds: filter.map((option) => Number(option.ID)) }));
        break;
      case 'EMPLOYEE':
        this._state.update((s) => ({
          ...s,
          creatorIds: filter.map((option) => Number(option.ID)),
        }));
        break;
      case 'SERVICEUSER':
        this._state.update((s) => ({
          ...s,
          serviceUserIds: filter.map((option) => Number(option.ID)),
        }));
        break;
      case 'MESSAGETYPE':
        this._state.update((s) => ({
          ...s,
          messageTypeIds: filter.map((option) => Number(option.ID)),
        }));
        break;
      default:
    }
  }

  public patchDateFilter(startTime: Date, endTime: Date, idTag: string) {
    switch (idTag) {
      case 'DATE':
        this._state.update((s) => ({ ...s, startTime: startTime, endTime: endTime }));
        break;
      default:
        break;
    }
  }

  public patchKeywordFilter(keywords: string[], idTag: string) {
    switch (idTag) {
      case 'KEYWORDS':
        this._state.update((s) => ({ ...s, keywords: keywords }));
        break;
      default:
        break;
    }
  }
}
