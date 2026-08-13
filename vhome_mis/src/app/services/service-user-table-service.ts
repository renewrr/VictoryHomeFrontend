import { computed, inject, Injectable, signal, WritableSignal } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActiveAreaService } from './active-area-service';
import { AssetEvent, BuildingEventBus } from './building-event-bus';
import { tap } from 'rxjs';
import {
  ManagementServiceUserResponseServiceUserData,
  ManagementServiceUserResponseServiceUserNickName,
  ServiceUserInputServiceUserInputData,
  ServiceUserSystemService,
} from '../core/api-client-v2';

@Injectable({
  providedIn: 'root',
})
export class ServiceUserTableService {
  serviceUserService = inject(ServiceUserSystemService);
  activeArea = inject(ActiveAreaService);
  eventBus = inject(BuildingEventBus);
  private _serviceUsers: WritableSignal<ManagementServiceUserResponseServiceUserData[]> = signal(
    [],
  );
  private _sortedUsers = computed(() =>
    [...this._serviceUsers()].sort((a, b) => {
      return (b.active ? 1 : 0) - (a.active ? 1 : 0) || a.ID - b.ID;
    }),
  );
  public editingRows = signal<Record<number, ManagementServiceUserResponseServiceUserData>>({});
  public length = computed(() => this._serviceUsers().length);
  public currentPageSize = signal(10);
  public currentPageIndex = signal(0);
  private startIdx = computed(() => this.currentPageIndex() * this.currentPageSize());
  private nextTempIdx = -2;
  public serviceUsers = computed(() => {
    return this._sortedUsers().slice(this.startIdx(), this.startIdx() + this.currentPageSize());
  });

  constructor() {
    this.fetchData().subscribe()
    this.eventBus.on(AssetEvent.BuildingModified).subscribe(() => {
      this.fetchData().subscribe();
    });
  }

  public startEdit(serviceUser: ManagementServiceUserResponseServiceUserData) {
    if (!this.isEditing(serviceUser)) {
      this.editingRows.update((rec) => ({
        ...rec,
        [serviceUser.ID]: structuredClone(serviceUser),
      }));
    }
  }

  public undoEdit(serviceUser: ManagementServiceUserResponseServiceUserData) {
    this.editingRows.update((rec) => ({
      ...rec,
      [serviceUser.ID]: structuredClone(serviceUser),
    }));
  }

  public revertEdit(serviceUser: ManagementServiceUserResponseServiceUserData) {
    this.editingRows.update((rec) => {
      const copy = { ...rec };
      delete copy[serviceUser.ID];
      return copy;
    });
  }

  public commitEdit(serviceUser: ManagementServiceUserResponseServiceUserData) {
    const buffer = this.getBuffer(serviceUser);
    if (buffer.living_space == this.activeArea.LIVING_SPACE_CLEAR_OPTION) {
      buffer.living_space = null;
    }
    this.serviceUserService
      .apiV3ServiceuserServiceUserPatch({ before: serviceUser, after: buffer })
      .subscribe((response) => {
        // this.api.apiServiceUserPatch({ before: serviceUser, after: buffer }).subscribe((response) => {
        this.dropBuffer(response.updated);
        this._serviceUsers.update((prevData) => {
          const newData: ManagementServiceUserResponseServiceUserData[] = [];
          for (const user of prevData) {
            if (user.ID != response.updated.ID) {
              newData.push(user);
            } else {
              if (!response.updated.deleted) {
                newData.push(response.updated);
              }
            }
          }
          return newData;
        });
      });
  }

  public fetchData() {
    return this.serviceUserService.apiV3ServiceuserAllServiceUsersGet().pipe(
      tap((response) => {
        this._serviceUsers.set(response.data_rows);
      }),
    );
  }

  public changePage(event: PageEvent) {
    this.currentPageIndex.set(event.pageIndex);
    this.currentPageSize.set(event.pageSize);
  }

  public isEditing(serviceUser: ManagementServiceUserResponseServiceUserData) {
    return serviceUser.ID in this.editingRows();
  }

  public getBuffer(serviceUser: ManagementServiceUserResponseServiceUserData) {
    return this.editingRows()[serviceUser.ID];
  }

  public dropBuffer(serviceUser: ManagementServiceUserResponseServiceUserData) {
    delete this.editingRows()[serviceUser.ID];
  }

  public updateRow(
    id: number,
    field: keyof ManagementServiceUserResponseServiceUserData,
    value: any,
  ) {
    this.editingRows.update((rec) => {
      if (!rec[id]) return rec;
      return {
        ...rec,
        [id]: {
          ...rec[id],
          [field]: value,
        },
      };
    });
  }

  public addNickname(
    serviceUser: ManagementServiceUserResponseServiceUserData,
    nickname: ManagementServiceUserResponseServiceUserNickName,
  ) {
    this.editingRows.update((rec) => {
      if (!rec[serviceUser.ID]) return rec;
      let new_nicknames: ManagementServiceUserResponseServiceUserNickName[] = [];
      if (nickname.ID == -1) {
        new_nicknames = [
          ...rec[serviceUser.ID].service_user_nicknames,
          {
            ID: this.nextTempIdx,
            nickname: nickname.nickname,
            service_user_id: nickname.service_user_id,
          },
        ];
        this.nextTempIdx = this.nextTempIdx - 1;
      } else {
        for (const nn of rec[serviceUser.ID].service_user_nicknames) {
          if (nn.ID == nickname.ID) {
            new_nicknames.push(nickname);
          } else {
            new_nicknames.push(nn);
          }
        }
      }
      return {
        ...rec,
        [serviceUser.ID]: {
          ...rec[serviceUser.ID],
          service_user_nicknames: new_nicknames,
        },
      };
    });
  }

  public editNickname(
    serviceUser: ManagementServiceUserResponseServiceUserData,
    nickname: ManagementServiceUserResponseServiceUserNickName,
  ) {
    this.editingRows.update((rec) => {
      if (!rec[serviceUser.ID]) return rec;
      let new_nicknames: ManagementServiceUserResponseServiceUserNickName[] = [];
      for (const nn of rec[serviceUser.ID].service_user_nicknames) {
        if (nn.ID == nickname.ID) {
          new_nicknames.push(nickname);
        } else {
          new_nicknames.push(nn);
        }
      }
      return {
        ...rec,
        [serviceUser.ID]: {
          ...rec[serviceUser.ID],
          service_user_nicknames: new_nicknames,
        },
      };
    });
  }

  public removeNickname(
    serviceUser: ManagementServiceUserResponseServiceUserData,
    nickname: ManagementServiceUserResponseServiceUserNickName,
  ) {
    this.editingRows.update((rec) => {
      if (!rec[serviceUser.ID]) return rec;
      let new_nicknames: ManagementServiceUserResponseServiceUserNickName[] = [];
      for (const nn of rec[serviceUser.ID].service_user_nicknames) {
        if (nn.ID != nickname.ID) {
          new_nicknames.push(nn);
        }
      }
      return {
        ...rec,
        [serviceUser.ID]: {
          ...rec[serviceUser.ID],
          service_user_nicknames: new_nicknames,
        },
      };
    });
  }

  public addUsers(dataRows: ServiceUserInputServiceUserInputData[]) {
    return this.serviceUserService.apiV3ServiceuserServiceUsersPost({ data_rows: dataRows }).pipe(
      tap((response) => {
        this.fetchData().subscribe();
      }),
    );
  }
}
