import { computed, inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, NavigationEnd, Params, Router } from '@angular/router';
import { filter, startWith } from 'rxjs';
import { ManagementBuildingService } from './management-building-service';

export type PageTypes =
  | { type: 'ALLVIEW' }
  | { type: 'BUILDING' }
  | { type: 'FLOOR' }
  | { type: 'ROOM' };

@Injectable({
  providedIn: 'root',
})
export class BuildingRouteService {
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private buildingService = inject(ManagementBuildingService);
  public navigationEnd = toSignal(
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      startWith(null),
    ),
  );
  generalId = computed(() => {
    this.navigationEnd();
    let currentRoute: ActivatedRoute | null = this.activatedRoute.root;
    while (currentRoute?.firstChild) {
      currentRoute = currentRoute.firstChild;
    }
    return this.getCurrentId(currentRoute.snapshot.params);
  });
  generalName = computed(() => {
    this.navigationEnd();
    let currentRoute: ActivatedRoute | null = this.activatedRoute.root;
    while (currentRoute?.firstChild) {
      currentRoute = currentRoute.firstChild;
    }
    return this.getCurrentObjectName(currentRoute.snapshot.params);
  });
  pageType = computed(() => {
    this.navigationEnd();
    let currentRoute: ActivatedRoute | null = this.activatedRoute.root;
    while (currentRoute?.firstChild) {
      currentRoute = currentRoute.firstChild;
    }
    return this.getCurrentPage(currentRoute.snapshot.params).type;
  });
  getCurrentPage(params: Params) {
    let pageType: PageTypes = { type: 'ALLVIEW' };
    if (params['buildingId']) {
      pageType = { type: 'BUILDING' };
    }
    if (params['floorId']) {
      pageType = { type: 'FLOOR' };
    }
    if (params['roomId']) {
      pageType = { type: 'ROOM' };
    }
    return pageType;
  }
  getCurrentId(params: Params) {
    let id = -1;
    if (params['buildingId']) {
      id = params['buildingId'];
    }
    if (params['floorId']) {
      id = params['floorId'];
    }
    if (params['roomId']) {
      id = params['roomId'];
    }
    return id;
  }
  getCurrentObjectName(params: Params) {
    let name = '';
    if (params['buildingId']) {
      name = this.buildingService.getBuilding(params['buildingId']).name;
    }
    if (params['floorId']) {
      name = this.buildingService.getFloor(params['floorId']).floor_name;
    }
    if (params['roomId']) {
      name = this.buildingService.getRoom(params['roomId']).name;
    }
    return name;
  }
}
