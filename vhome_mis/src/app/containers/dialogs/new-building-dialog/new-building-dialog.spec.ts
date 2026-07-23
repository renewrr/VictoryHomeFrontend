import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBuildingDialog } from './new-building-dialog';

describe('NewBuildingDialog', () => {
  let component: NewBuildingDialog;
  let fixture: ComponentFixture<NewBuildingDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewBuildingDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(NewBuildingDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
