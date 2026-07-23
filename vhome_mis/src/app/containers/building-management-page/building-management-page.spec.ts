import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingManagementPage } from './building-management-page';

describe('BuildingManagementPage', () => {
  let component: BuildingManagementPage;
  let fixture: ComponentFixture<BuildingManagementPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildingManagementPage],
    }).compileComponents();

    fixture = TestBed.createComponent(BuildingManagementPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
