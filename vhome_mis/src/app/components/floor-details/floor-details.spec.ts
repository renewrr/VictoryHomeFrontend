import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloorDetails } from './floor-details';

describe('FloorDetails', () => {
  let component: FloorDetails;
  let fixture: ComponentFixture<FloorDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FloorDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(FloorDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
