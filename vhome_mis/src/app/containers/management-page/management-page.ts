import { Component, inject } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ServiceUserManagementTable } from '../../components/service-user-management-table/service-user-management-table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { ManagementNewServiceUserDialog } from '../dialogs/management-new-service-user-dialog/management-new-service-user-dialog';
import { EmployeeManagementTable } from '../../components/employee-management-table/employee-management-table';
import { ManagementNewEmployeeDialog } from '../dialogs/management-new-employee-dialog/management-new-employee-dialog';
import { ServiceUserTableService } from '../../services/service-user-table-service';
import { EmployeeStateService } from '../../services/employee-state-service';
import { AssetEvent, BuildingEventBus } from '../../services/building-event-bus';

@Component({
  selector: 'app-management-page',
  imports: [
    MatTabsModule,
    ServiceUserManagementTable,
    EmployeeManagementTable,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './management-page.html',
  styleUrl: './management-page.scss',
})
export class ManagementPage {
  dialogService = inject(MatDialog);
  serviceUser = inject(ServiceUserTableService);
  employee = inject(EmployeeStateService);
  eventBus = inject(BuildingEventBus)
  summnonNewServiceUserDialog() {
    this.dialogService
      .open(ManagementNewServiceUserDialog, {
        data: [],
        width: '780px',
        maxWidth: '90vw',
        height: 'auto',
        maxHeight: '85vh',
      })
      .afterClosed()
      .subscribe(() => {
        this.serviceUser.fetchData();
      });
  }

  summnonNewEmployeeDialog() {
    this.dialogService
      .open(ManagementNewEmployeeDialog, {
        data: [],
        width: '780px',
        maxWidth: '90vw',
        height: 'auto',
        maxHeight: '85vh',
      })
      .afterClosed()
      .subscribe(() => {
        this.employee.fetchData().subscribe();
      });
  }

  refreshServiceUser(){
    this.eventBus.emit(AssetEvent.BuildingModified)
    this.serviceUser.fetchData()
  }
}
