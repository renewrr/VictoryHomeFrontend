import { TestBed } from '@angular/core/testing';

import { ActiveAreaService } from './active-area-service';

describe('ActiveAreaService', () => {
  let service: ActiveAreaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActiveAreaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
