import { TestBed } from '@angular/core/testing';

import { SecondaryMessageTableService } from './secondary-message-table-service';

describe('SecondaryMessageTableService', () => {
  let service: SecondaryMessageTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecondaryMessageTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
