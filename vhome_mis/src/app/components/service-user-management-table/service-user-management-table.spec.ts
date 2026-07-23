import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceUserManagementTable } from './service-user-management-table';

describe('ServiceUserManagementTable', () => {
  let component: ServiceUserManagementTable;
  let fixture: ComponentFixture<ServiceUserManagementTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceUserManagementTable],
    }).compileComponents();

    fixture = TestBed.createComponent(ServiceUserManagementTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
