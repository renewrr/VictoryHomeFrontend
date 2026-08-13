import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { EmployeeStateService } from '../services/employee-state-service';
import { catchError, map, of } from 'rxjs';
import { ServiceUserTableService } from '../services/service-user-table-service';

export const managementResolver: ResolveFn<boolean> = (route, state) => {
  const employeeState = inject(EmployeeStateService);
  employeeState
    .fetchData()
    .pipe(
      map(() => true),
      catchError(() => of(false)),
    )
    .subscribe();

  const serviceUserState = inject(ServiceUserTableService);
  serviceUserState
    .fetchData()
    .pipe(
      map(() => true),
      catchError(() => of(false)),
    )
    .subscribe();
  return true;
};
