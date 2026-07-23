import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFloorDialog } from './new-floor-dialog';

describe('NewFloorDialog', () => {
  let component: NewFloorDialog;
  let fixture: ComponentFixture<NewFloorDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewFloorDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(NewFloorDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
