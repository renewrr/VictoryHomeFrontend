import { TestBed } from '@angular/core/testing';

import { BuildingEventBus } from './building-event-bus';

describe('BuildingEventBus', () => {
  let service: BuildingEventBus;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuildingEventBus);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
