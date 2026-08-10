import { computed, inject, Injectable, signal } from '@angular/core';
import {
  ManagementEmployeeResponseAuth,
  ManagementEmployeeResponseEmployeeDetails,
} from '../core/api-client-v2';
import { PageEvent } from '@angular/material/paginator';
import { DELETE } from '@angular/cdk/keycodes';
import { newEmployeeData } from '../containers/dialogs/management-new-employee-dialog/management-new-employee-dialog';
import { FormGroup } from '@angular/forms';
import { tap } from 'rxjs';
import { AuthSystemService, PersonnelSystemService } from '../core/api-client-v2';

export type TotpInteractions =
  | { type: 'HIDING' }
  | { type: 'DISPLAY' }
  | { type: 'DELETING' }
  | { type: 'ADDING' }
  | { type: 'NOAUTH' };

export interface EditableEmployeeRow extends ManagementEmployeeResponseEmployeeDetails {
  totpStatus: TotpInteractions;
}

@Injectable({
  providedIn: 'root',
})
export class EmployeeStateService {
  authService = inject(AuthSystemService);
  personnelService = inject(PersonnelSystemService);
  private _rawData = signal<ManagementEmployeeResponseEmployeeDetails[]>([]);
  private _employeeData = computed(() =>
    this._rawData().map((rd) => {
      const empData: ManagementEmployeeResponseEmployeeDetails = rd;
      return empData;
    }),
  );
  private _sortedEmployee = computed(() =>
    [...this._employeeData()].sort((a, b) => {
      return a.ID - b.ID;
    }),
  );
  public editingRows = signal<Record<number, EditableEmployeeRow>>({});
  public length = computed(() => this._employeeData().length);
  public currentPageSize = signal(10);
  public currentPageIndex = signal(0);
  private startIdx = computed(() => this.currentPageIndex() * this.currentPageSize());
  public employeeData = computed(() => {
    return this._sortedEmployee().slice(this.startIdx(), this.startIdx() + this.currentPageSize());
  });

  constructor() {
    this.fetchData().subscribe();
  }

  fetchData() {
    return this.personnelService.apiV3PersonnelEmployeeDetailsGet().pipe(
      tap((response) => {
        this._rawData.set(response.data_rows);
      }),
    );
  }

  public changePage(event: PageEvent) {
    this.currentPageIndex.set(event.pageIndex);
    this.currentPageSize.set(event.pageSize);
  }

  public isEditing(employee: ManagementEmployeeResponseEmployeeDetails) {
    return employee.ID in this.editingRows();
  }

  public getBuffer(employee: ManagementEmployeeResponseEmployeeDetails) {
    return this.editingRows()[employee.ID];
  }

  public dropBuffer(employee: ManagementEmployeeResponseEmployeeDetails) {
    delete this.editingRows()[employee.ID];
  }

  public startEdit(employee: ManagementEmployeeResponseEmployeeDetails) {
    if (!this.isEditing(employee)) {
      const employeeWithAuth = this.generateEditableRow(employee);
      this.editingRows.update((rec) => ({
        ...rec,
        [employee.ID]: employeeWithAuth,
      }));
    }
  }

  public undoEdit(employee: ManagementEmployeeResponseEmployeeDetails) {
    const employeeWithAuth = this.generateEditableRow(employee);
    this.editingRows.update((rec) => ({
      ...rec,
      [employee.ID]: employeeWithAuth,
    }));
  }

  private generateEditableRow(employee: ManagementEmployeeResponseEmployeeDetails) {
    const employeeWithAuth: EditableEmployeeRow = {
      ...structuredClone(employee),
      totpStatus: { type: 'DISPLAY' },
    };
    if (!employeeWithAuth.auth) {
      // employeeWithAuth.auth = { ID: -1, account: '', password: '', totp_secret: null };
      employeeWithAuth.totpStatus = { type: 'NOAUTH' };
    } else if (!employeeWithAuth.auth || !employeeWithAuth.auth.totp_secret) {
      employeeWithAuth.totpStatus = { type: 'HIDING' };
    }
    return employeeWithAuth;
  }

  public revertEdit(employee: ManagementEmployeeResponseEmployeeDetails) {
    this.editingRows.update((rec) => {
      const copy = { ...rec };
      delete copy[employee.ID];
      return copy;
    });
  }

  public commitEdit(employee: ManagementEmployeeResponseEmployeeDetails) {
    const buffer = this.getBuffer(employee);
    this.personnelService
      .apiV3PersonnelEmployeeDetailsPatch({ before: employee, after: buffer })
      .subscribe((response) => {
        this.dropBuffer(response.updated);
        this._rawData.update((prevData) => {
          const newData: ManagementEmployeeResponseEmployeeDetails[] = [];
          for (const emp of prevData) {
            if (emp.ID != response.updated.ID) {
              newData.push(emp);
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

  public updateRow(id: number, field: keyof EditableEmployeeRow, value: any) {
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

  public updateAuth(id: number, field: keyof ManagementEmployeeResponseAuth, value: any) {
    this.editingRows.update((rec) => {
      if (!rec[id]) return rec;
      return {
        ...rec,
        [id]: {
          ...rec[id],
          ['auth']: (() => {
            if (rec[id].auth) {
              return { ...rec[id].auth, [field]: value };
            } else {
              const auth: ManagementEmployeeResponseAuth = { ID: -1, account: '', password: '' };
              return { ...auth, [field]: value };
            }
          })(),
        },
      };
    });
  }

  public restoreTotp(employee: ManagementEmployeeResponseEmployeeDetails) {
    this.editingRows.update((rec) => {
      if (!rec[employee.ID]) return rec;
      return {
        ...rec,
        [employee.ID]: {
          ...rec[employee.ID],
          ['auth']: (() => {
            return employee.auth;
          })(),
          ['totpStatus']: (() => {
            if (employee.auth?.totp_secret) {
              return { type: 'DISPLAY' };
            } else {
              if (employee.auth) {
                return { type: 'HIDING' };
              } else {
                return { type: 'NOAUTH' };
              }
            }
          })(),
        },
      };
    });
  }

  public setupTOTP(employee: ManagementEmployeeResponseEmployeeDetails) {
    this.personnelService.apiV3PersonnelEmployeeSetupTotpPatch(employee).subscribe((resp) => {
      this._rawData.update((data) => {
        const newData: ManagementEmployeeResponseEmployeeDetails[] = [];
        for (const row of data) {
          if (row.ID != resp.ID) {
            newData.push(row);
          } else {
            newData.push(resp);
          }
        }
        this.restoreTotp(resp);
        return newData;
      });
    });
  }

  public removeTotp(employee: ManagementEmployeeResponseEmployeeDetails) {
    this.updateAuth(employee.ID, 'totp_secret', null);
    this.updateRow(employee.ID, 'totpStatus', { type: 'DELETING' });
  }

  public cancelAddition(employee: ManagementEmployeeResponseEmployeeDetails) {
    this.updateRow(employee.ID, 'totpStatus', { type: 'HIDING' });
  }

  public forcedLogout(employee: ManagementEmployeeResponseEmployeeDetails) {
    this.authService.apiV3AuthForceLogoutPost({ user_id: employee.ID }).subscribe((response) => {
      console.log(response);
    });
  }

  public addEmployee(newData: FormGroup<newEmployeeData>) {
    return this.personnelService
      .apiV3PersonnelEmployeeDetailsPost({
        name: newData.controls.name.value,
        email: newData.controls.email.value ?? '',
        account: newData.controls.account.value ?? '',
        password: newData.controls.password.value ?? '',
        use_two_factor: newData.controls.hasTwoFactor.value,
      })
      .pipe(
        tap((response) => {
          this.fetchData().subscribe();
        }),
      );
  }
}
