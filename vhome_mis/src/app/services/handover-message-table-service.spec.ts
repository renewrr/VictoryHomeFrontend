import { TestBed } from '@angular/core/testing';

import { HandoverMessageTableService } from './handover-message-table-service';

describe('HandoverMessageTableService', () => {
  let service: HandoverMessageTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandoverMessageTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
