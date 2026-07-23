import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { HandoverMessageTableService } from '../services/handover-message-table-service';
import { catchError, map, of } from 'rxjs';

export const handoverResolver: ResolveFn<boolean> = (route, state) => {
  const handoverService = inject(HandoverMessageTableService);
  handoverService.fetchNicknames().pipe(
    map(() => true),
    catchError(() => of(false)),
  );

  return true;
};
