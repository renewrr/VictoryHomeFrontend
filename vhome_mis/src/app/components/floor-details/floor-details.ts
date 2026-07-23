import { Component, computed, inject, input } from '@angular/core';
import { ManagementBuildingService } from '../../services/management-building-service';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-floor-details',
  imports: [MatCardModule, RouterModule],
  templateUrl: './floor-details.html',
  styleUrl: './floor-details.scss',
})
export class FloorDetails {
  buildingId = input.required<string>(); // Bound from URL automatically
  floorId = input.required<string>(); // Bound from URL automatically
  buildingService = inject(ManagementBuildingService);
  buildingData = computed(() => this.buildingService.getBuilding(Number(this.buildingId())));
  floorData = computed(() => this.buildingService.getFloor(Number(this.floorId())));
}
