import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingBreadcrumbs } from './building-breadcrumbs';

describe('BuildingBreadcrumbs', () => {
  let component: BuildingBreadcrumbs;
  let fixture: ComponentFixture<BuildingBreadcrumbs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildingBreadcrumbs],
    }).compileComponents();

    fixture = TestBed.createComponent(BuildingBreadcrumbs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
