import { TestBed } from '@angular/core/testing';

import { BuildingRouteService } from './building-route-service';

describe('BuildingRouteService', () => {
  let service: BuildingRouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuildingRouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
