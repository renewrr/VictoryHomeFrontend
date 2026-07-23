import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementNewEmployeeDialog } from './management-new-employee-dialog';

describe('ManagementNewEmployeeDialog', () => {
  let component: ManagementNewEmployeeDialog;
  let fixture: ComponentFixture<ManagementNewEmployeeDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagementNewEmployeeDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(ManagementNewEmployeeDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
