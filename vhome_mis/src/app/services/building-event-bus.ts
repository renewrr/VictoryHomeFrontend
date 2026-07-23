import { Injectable } from '@angular/core';
import { filter, Observable, Subject } from 'rxjs';

export enum AssetEvent {
  BuildingModified = 'BUILDING_MODIFIED',
}

@Injectable({
  providedIn: 'root',
})
export class BuildingEventBus {
  private bus$ = new Subject<AssetEvent>();
  public emit(event: AssetEvent): void {
    this.bus$.next(event);
  }
  public on(event: AssetEvent): Observable<AssetEvent> {
    return this.bus$.asObservable().pipe(filter((e) => e === event));
  }
}
