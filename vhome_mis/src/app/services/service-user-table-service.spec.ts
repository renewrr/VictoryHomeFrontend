import { TestBed } from '@angular/core/testing';

import { ServiceUserTableService } from './service-user-table-service';

describe('ServiceUserTableService', () => {
  let service: ServiceUserTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceUserTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
