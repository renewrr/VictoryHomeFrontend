import { Component, computed, inject, input } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, NavigationEnd, Params, Router, RouterModule } from '@angular/router';
import { filter, startWith } from 'rxjs';
import { ManagementBuildingService } from '../../services/management-building-service';
import { BuildingRouteService } from '../../services/building-route-service';

interface BreadcrumbItem {
  label: string;
  url: string;
}

@Component({
  selector: 'app-building-breadcrumbs',
  imports: [RouterModule],
  templateUrl: './building-breadcrumbs.html',
  styleUrl: './building-breadcrumbs.scss',
})
export class BuildingBreadcrumbs {
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  buildingService = inject(ManagementBuildingService);
  private buildingRoute = inject(BuildingRouteService)

  // 2. Compute the dynamic trail every time the URL changes
  protected breadcrumbs = computed<BreadcrumbItem[]>(() => {
    this.buildingRoute.navigationEnd(); // Track routing dependency

    let currentRoute: ActivatedRoute | null = this.activatedRoute.root;
    while (currentRoute?.firstChild) {
      currentRoute = currentRoute.firstChild;
    }
    return this.makeItems(currentRoute.snapshot.params);
  });

  private makeItems(params: Params) {
    const out: BreadcrumbItem[] = [];
    out.push({ label: '勝利之家', url: '/buildingManagement' });
    if (params['buildingId']) {
      const building = this.buildingService.getBuilding(Number(params['buildingId']));
      if (building) {
        out.push({
          label: building.name,
          url: `/buildingManagement/building/${params['buildingId']}`,
        });
      }
    }
    if (params['floorId']) {
      const floor = this.buildingService.getFloor(Number(params['floorId']));
      if (floor) {
        out.push({
          label: floor.floor_name,
          url: `/buildingManagement/building/${params['buildingId']}/floor/${params['floorId']}`,
        });
      }
    }
    if (params['roomId']) {
      const room = this.buildingService.getRoom(Number(params['roomId']));
      if (room) {
        out.push({
          label: room.name,
          url: `/buildingManagement/building/${params['buildingId']}/floor/${params['floorId']}/room/${params['roomId']}`,
        });
      }
    }
    return out;
  }
}
