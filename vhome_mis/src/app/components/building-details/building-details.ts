import { Component, computed, inject, input } from '@angular/core';
import { ManagementBuildingService } from '../../services/management-building-service';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-building-details',
  imports: [MatCardModule, RouterModule, MatButtonModule, MatIconModule],
  templateUrl: './building-details.html',
  styleUrl: './building-details.scss',
})
export class BuildingDetails {
  buildingId = input.required<string>(); // Bound from URL automatically
  buildingService = inject(ManagementBuildingService);
  buildingData = computed(() => this.buildingService.getBuilding(Number(this.buildingId())));
}
