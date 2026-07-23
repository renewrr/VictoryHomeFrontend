import { TestBed } from '@angular/core/testing';

import { FilterLookupService } from './filter-lookup-service';

describe('FilterLookupService', () => {
  let service: FilterLookupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterLookupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
