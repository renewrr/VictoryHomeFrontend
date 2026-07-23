import { Component, inject } from '@angular/core';
import { ServiceUserTableService } from '../../services/service-user-table-service';
import { TranslateModule } from '@ngx-translate/core';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import {
  ManagementServiceUserResponseServiceUserData,
  ManagementServiceUserResponseServiceUserNickName,
} from '../../core/api-client-v2';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { ActiveAreaService } from '../../services/active-area-service';
import { MatChipEditedEvent, MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { COMMA, E, ENTER } from '@angular/cdk/keycodes';
import { BuildingEventBus } from '../../services/building-event-bus';

@Component({
  selector: 'app-service-user-management-table',
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    TranslateModule,
    MatSelectModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatSlideToggleModule,
  ],
  templateUrl: './service-user-management-table.html',
  styleUrl: './service-user-management-table.scss',
})
export class ServiceUserManagementTable {
  serviceUserState = inject(ServiceUserTableService);
  activeAreaService = inject(ActiveAreaService);
  displayedColumns = ['name', 'livingSpace', 'nickname', 'activeStatus', 'editRow'];
  readonly addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  pageChanged(event: PageEvent) {
    this.serviceUserState.changePage(event);
  }

  asRow(row: ManagementServiceUserResponseServiceUserData) {
    return row;
  }

  editRow(row: ManagementServiceUserResponseServiceUserData) {
    this.serviceUserState.startEdit(row);
  }

  undoEdit(row: ManagementServiceUserResponseServiceUserData) {
    this.serviceUserState.undoEdit(row);
  }

  cancelEdit(row: ManagementServiceUserResponseServiceUserData) {
    this.serviceUserState.revertEdit(row);
  }

  commitEdit(row: ManagementServiceUserResponseServiceUserData) {
    this.serviceUserState.commitEdit(row);
  }

  addNickname(row: ManagementServiceUserResponseServiceUserData, event: MatChipInputEvent) {
    this.serviceUserState.addNickname(row, {
      ID: -1,
      nickname: event.value,
      service_user_id: row.ID,
    });
    event.chipInput.clear();
  }

  addNicknameFromButton(
    row: ManagementServiceUserResponseServiceUserData,
    inputElement: HTMLInputElement,
  ) {
    const val = inputElement.value.trim();
    if (val) {
      this.serviceUserState.addNickname(row, { ID: -1, nickname: val, service_user_id: row.ID });
    }
    inputElement.value = '';
  }

  removeNickname(
    row: ManagementServiceUserResponseServiceUserData,
    nickname: ManagementServiceUserResponseServiceUserNickName,
  ) {
    this.serviceUserState.removeNickname(row, nickname);
  }

  editNickname(
    row: ManagementServiceUserResponseServiceUserData,
    nickname: ManagementServiceUserResponseServiceUserNickName,
    event: MatChipEditedEvent,
  ) {
    this.serviceUserState.editNickname(row, {
      ID: nickname.ID,
      nickname: event.value,
      service_user_id: row.ID,
    });
  }

  getRowName(row: ManagementServiceUserResponseServiceUserData) {
    const buffer = this.serviceUserState.getBuffer(row);
    return buffer.living_space ? buffer.living_space.name : '非住宿';
  }
}
