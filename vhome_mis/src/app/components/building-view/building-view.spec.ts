import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingView } from './building-view';

describe('BuildingView', () => {
  let component: BuildingView;
  let fixture: ComponentFixture<BuildingView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildingView],
    }).compileComponents();

    fixture = TestBed.createComponent(BuildingView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
