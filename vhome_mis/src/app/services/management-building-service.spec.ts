import { TestBed } from '@angular/core/testing';

import { ManagementBuildingService } from './management-building-service';

describe('ManagementBuildingService', () => {
  let service: ManagementBuildingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagementBuildingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
