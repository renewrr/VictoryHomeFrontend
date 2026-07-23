import { Component, computed, inject, input } from '@angular/core';
import { ManagementBuildingService } from '../../services/management-building-service';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-room-details',
  imports: [MatCardModule, RouterModule],
  templateUrl: './room-details.html',
  styleUrl: './room-details.scss',
})
export class RoomDetails {
  buildingId = input.required<string>(); // Bound from URL automatically
  floorId = input.required<string>(); // Bound from URL automatically
  roomId = input.required<string>(); // Bound from URL automatically
  buildingService = inject(ManagementBuildingService);
  buildingData = computed(() => this.buildingService.getBuilding(Number(this.buildingId())));
  floorData = computed(() => this.buildingService.getFloor(Number(this.floorId())));
  roomData = computed(() => this.buildingService.getRoom(Number(this.roomId())))
}
