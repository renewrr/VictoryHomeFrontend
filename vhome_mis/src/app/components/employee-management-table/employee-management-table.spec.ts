import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeManagementTable } from './employee-management-table';

describe('EmployeeManagementTable', () => {
  let component: EmployeeManagementTable;
  let fixture: ComponentFixture<EmployeeManagementTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeManagementTable],
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeeManagementTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
