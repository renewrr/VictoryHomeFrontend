import { computed, inject, Injectable, signal } from '@angular/core';
import {
  BuildingDeleteRequest,
  BuildingResponseBuildingDetails,
  BuildingResponseFloorDetails,
  BuildingResponseRoomDetails,
  FloorDeleteRequest,
  NewBuildingRequest,
  NewFloorRequest,
  NewRoomRequest,
  RoomDeleteRequest,
} from '../core/api-client-v2';
import { filter, startWith, tap } from 'rxjs';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { AssetEvent, BuildingEventBus } from './building-event-bus';
import { OperationsSystemService } from '../core/api-client-v2';

@Injectable({
  providedIn: 'root',
})
export class ManagementBuildingService {
  operationsService = inject(OperationsSystemService);

  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private eventBus = inject(BuildingEventBus);
  ready = signal(false);
  _buildingData = signal<BuildingResponseBuildingDetails[]>([]);
  buildingData = computed(() => this._buildingData());
  _buildingLookup = computed(() => {
    const lookup: Record<number, BuildingResponseBuildingDetails> = {};
    for (const building of this.buildingData()) {
      lookup[building.ID] = building;
      // building.building_floors.sort((a, b) => a.floor_name.localeCompare(b.floor_name));
    }
    return lookup;
  });
  _floorLookup = computed(() => {
    const lookup: Record<number, BuildingResponseFloorDetails> = {};
    for (const building of this.buildingData()) {
      for (const floor of building.building_floors) {
        lookup[floor.ID] = floor;
        floor.living_space.sort((a, b) => a.name.localeCompare(b.name));
      }
    }
    return lookup;
  });
  _roomLookup = computed(() => {
    const lookup: Record<number, BuildingResponseRoomDetails> = {};
    for (const building of this.buildingData()) {
      for (const floor of building.building_floors) {
        for (const room of floor.living_space) {
          lookup[room.ID] = room;
        }
      }
    }
    return lookup;
  });

  flatRooms = computed(() => {
    const rooms: BuildingResponseRoomDetails[] = [];
    for (const building of this.buildingData()) {
      for (const floor of building.building_floors) {
        for (const room of floor.living_space) {
          rooms.push(room);
        }
      }
    }
    return rooms;
  });

  public navigationEnd = toSignal(
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      startWith(null),
    ),
  );

  routeParams = computed(() => {
    this.navigationEnd();
    let currentRoute: ActivatedRoute | null = this.activatedRoute.root;
    while (currentRoute?.firstChild) {
      currentRoute = currentRoute.firstChild;
    }
    return currentRoute.snapshot.paramMap;
  });

  constructor() {
    this.reloadBuildings();
  }

  public reloadBuildings() {
    this.ready.set(false);
    this.operationsService.apiV3OperationsBuildingsGet().subscribe((resp) => {
      this._buildingData.set(resp.data_rows);
      this.ready.set(true);
    });
  }

  public getBuilding(id: number) {
    return this._buildingLookup()[id];
  }

  public getFloor(id: number) {
    return this._floorLookup()[id];
  }

  public getRoom(id: number) {
    return this._roomLookup()[id];
  }

  public newBuilding(params: NewBuildingRequest) {
    return this.operationsService.apiV3OperationsBuildingPost(params).pipe(
      tap((response) => {
        if (response.status == true) {
          this.reloadBuildings();
          this.eventBus.emit(AssetEvent.BuildingModified);
        }
      }),
    );
  }

  public newFloor(params: NewFloorRequest) {
    return this.operationsService.apiV3OperationsFloorPost(params).pipe(
      tap((response) => {
        if (response.status == true) {
          this.reloadBuildings();
          this.eventBus.emit(AssetEvent.BuildingModified);
        }
      }),
    );
  }

  public newRoom(params: NewRoomRequest) {
    return this.operationsService.apiV3OperationsRoomPost(params).pipe(
      tap((response) => {
        if (response.status == true) {
          this.reloadBuildings();
          this.eventBus.emit(AssetEvent.BuildingModified);
        }
      }),
    );
  }

  public deleteBuilding(params: BuildingDeleteRequest) {
    this.operationsService.apiV3OperationsBuildingDelete(params).subscribe((response) => {
      if (response.status) {
        this.reloadBuildings();
        this.eventBus.emit(AssetEvent.BuildingModified);
        this.router.navigate(['buildingManagement']);
      }
    });
  }

  public deleteFloor(params: FloorDeleteRequest) {
    const bId = this.routeParams().get('buildingId');
    this.operationsService.apiV3OperationsFloorDelete(params).subscribe((response) => {
      if (response.status) {
        this.reloadBuildings();
        this.eventBus.emit(AssetEvent.BuildingModified);
        this.router.navigate(['buildingManagement', 'building', bId]);
      }
    });
  }

  public deleteRoom(params: RoomDeleteRequest) {
    const bId = this.routeParams().get('buildingId');
    const fId = this.routeParams().get('floorId');
    this.operationsService.apiV3OperationsRoomDelete(params).subscribe((response) => {
      if (response.status) {
        this.reloadBuildings();
        this.eventBus.emit(AssetEvent.BuildingModified);
        this.router.navigate(['buildingManagement', 'building', bId, 'floor', fId]);
      }
    });
  }
}
