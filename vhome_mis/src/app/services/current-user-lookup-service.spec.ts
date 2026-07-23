import { TestBed } from '@angular/core/testing';

import { CurrentUserLookupService } from './current-user-lookup-service';

describe('CurrentUserLookupService', () => {
  let service: CurrentUserLookupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentUserLookupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
