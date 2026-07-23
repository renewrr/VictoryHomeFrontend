import { computed, inject, Injectable, signal } from '@angular/core';
import { AssetEvent, BuildingEventBus } from './building-event-bus';
import { ManagementLivingSpaceResponseLivingSpaceData, OperationsSystemService } from '../core/api-client-v2';


@Injectable({
  providedIn: 'root',
})
export class ActiveAreaService {
  readonly LIVING_SPACE_CLEAR_OPTION: ManagementLivingSpaceResponseLivingSpaceData = {
    ID: -1,
    name: '非住宿',
    floor: { ID: -1, floor_name: '非住宿', building: { ID: -1, name: '非住宿' } },
  };
  private operationService = inject(OperationsSystemService)
  private eventBus = inject(BuildingEventBus);
  private _livingSpaces = signal<ManagementLivingSpaceResponseLivingSpaceData[]>([]);
  public livingSpaces = computed(() => {
    const ls = this._livingSpaces();
    ls.sort((a, b) => a.name.localeCompare(b.name));
    return ls;
  });

  constructor() {
    this.eventBus.on(AssetEvent.BuildingModified).subscribe(() => {
      this.loadData();
    });
    this.loadData();
  }

  loadData() {
    this.operationService.apiV3OperationsLivingSpacesGet().subscribe((response) => {
      this._livingSpaces.update(() => response.data_rows);
    });
  }

  compareLivingSpace = (
    l1: ManagementLivingSpaceResponseLivingSpaceData | null,
    l2: ManagementLivingSpaceResponseLivingSpaceData | null,
  ): boolean => {
    if (this.isNull(l1) && this.isNull(l2)) {
      return true;
    }
    if (this.isNull(l1)) {
      return false;
    }
    if (this.isNull(l2)) {
      return false;
    }
    return l1!.ID == l2!.ID;
  };
  isNull(l: ManagementLivingSpaceResponseLivingSpaceData | null) {
    return l === null || l === this.LIVING_SPACE_CLEAR_OPTION;
  }
}
