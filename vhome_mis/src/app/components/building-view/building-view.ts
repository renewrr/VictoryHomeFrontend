import { Component, inject } from '@angular/core';
import { ManagementBuildingService } from '../../services/management-building-service';
import {
  BuildingResponseBuildingDetails,
} from '../../core/api-client-v2';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-building-view',
  imports: [MatCardModule, RouterModule, MatButtonModule, MatIconModule],
  templateUrl: './building-view.html',
  styleUrl: './building-view.scss',
})
export class BuildingView {
  buildingService = inject(ManagementBuildingService);

  asBuildingData(row: BuildingResponseBuildingDetails): BuildingResponseBuildingDetails {
    return row;
  }

  deleteBuilding(floorData: BuildingResponseBuildingDetails, event: PointerEvent) {
    console.log(floorData);
    event.stopPropagation();
  }
}
