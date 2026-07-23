import { Component, computed, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BuildingBreadcrumbs } from '../../components/building-breadcrumbs/building-breadcrumbs';
import { ManagementBuildingService } from '../../services/management-building-service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BuildingRouteService } from '../../services/building-route-service';
import { MatDialog } from '@angular/material/dialog';
import { NewBuildingDialog } from '../dialogs/new-building-dialog/new-building-dialog';
import { NewFloorDialog } from '../dialogs/new-floor-dialog/new-floor-dialog';
import { NewRoomDialog } from '../dialogs/new-room-dialog/new-room-dialog';
import { GenericConfirmationDialog } from '../dialogs/generic-confirmation-dialog/generic-confirmation-dialog';
import { CurrentUserLookupService } from '../../services/current-user-lookup-service';

@Component({
  selector: 'app-building-management-page',
  imports: [MatCardModule, RouterModule, BuildingBreadcrumbs, MatIconModule, MatButtonModule],
  templateUrl: './building-management-page.html',
  styleUrl: './building-management-page.scss',
})
export class BuildingManagementPage {
  buildingService = inject(ManagementBuildingService);
  buildingRoute = inject(BuildingRouteService);
  dialogService = inject(MatDialog);
  currentUserService = inject(CurrentUserLookupService)
  pageStr = computed(() => {
    switch (this.buildingRoute.pageType()) {
      case 'ALLVIEW':
        return '新增建築物';
      case 'BUILDING':
        return '新增樓層';
      case 'FLOOR':
        return '新增房間';
      case 'ROOM':
        return '';
      default:
        return '';
    }
  });
  pageFunc() {
    switch (this.buildingRoute.pageType()) {
      case 'ALLVIEW':
        this.dialogService.open(NewBuildingDialog, {
          width: '420px',
        });
        return;
      case 'BUILDING':
        this.dialogService.open(NewFloorDialog, {
          width: '420px',
          data: {
            buildingId: this.buildingRoute.generalId(),
          },
        });
        return;
      case 'FLOOR':
        this.dialogService.open(NewRoomDialog, {
          width: '420px',
          data: {
            floorId: this.buildingRoute.generalId(),
          },
        });
        return;
      case 'ROOM':
        return;
      default:
        console.log('ERROR');
        return;
    }
  }
  deleteStr = computed(() => {
    switch (this.buildingRoute.pageType()) {
      case 'ALLVIEW':
        return '';
      case 'BUILDING':
        return '刪除建築物';
      case 'FLOOR':
        return '刪除樓層';
      case 'ROOM':
        return '刪除房間';
      default:
        return '';
    }
  });
  deleteFunc() {
    switch (this.buildingRoute.pageType()) {
      case 'ALLVIEW':
        console.log('ERROR');
        return;
      case 'BUILDING':
        const buildingId = this.buildingRoute.generalId();
        this.dialogService
          .open(GenericConfirmationDialog, {
            width: '440px',
            disableClose: true, // Prevents closing by accidentally clicking outside the modal
            data: {
              title: '刪除建築物?',
              message: `確認刪除建築物 "${this.buildingRoute.generalName()}"? 此行動將刪除此建築物及相關之樓層、房間、服務使用者住宿資訊。`,
              confirmText: '刪除建築物',
              cancelText: '保留建築物',
              color: 'warn', // Makes the confirmation button red!
            },
          })
          .afterClosed()
          .subscribe((status) => {
            if (status) {
              this.buildingService.deleteBuilding({ building_id: buildingId });
            }
          });
        return;
      case 'FLOOR':
        const floorId = this.buildingRoute.generalId();
        this.dialogService
          .open(GenericConfirmationDialog, {
            width: '440px',
            disableClose: true, // Prevents closing by accidentally clicking outside the modal
            data: {
              title: '刪除樓層?',
              message: `確認刪除樓層 "${this.buildingRoute.generalName()}"? 此行動將刪除此樓層及相關之房間、服務使用者住宿資訊。`,
              confirmText: '刪除樓層',
              cancelText: '保留樓層',
              color: 'warn', // Makes the confirmation button red!
            },
          })
          .afterClosed()
          .subscribe((status) => {
            if (status) {
              this.buildingService.deleteFloor({ floor_id: floorId });
            }
          });
        return;
      case 'ROOM':
        const roomId = this.buildingRoute.generalId();
        this.dialogService
          .open(GenericConfirmationDialog, {
            width: '440px',
            disableClose: true, // Prevents closing by accidentally clicking outside the modal
            data: {
              title: '刪除房間?',
              message: `確認刪除房間 "${this.buildingRoute.generalName()}"? 此行動將刪除此房間及相關之服務使用者住宿資訊。`,
              confirmText: '刪除房間',
              cancelText: '保留房間',
              color: 'warn', // Makes the confirmation button red!
            },
          })
          .afterClosed()
          .subscribe((status) => {
            if (status) {
              this.buildingService.deleteRoom({ room_id: roomId });
            }
          });
        return;
      default:
        console.log('ERROR');
        return;
    }
  }
}
