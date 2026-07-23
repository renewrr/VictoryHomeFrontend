import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementNewServiceUserDialog } from './management-new-service-user-dialog';

describe('ManagementNewServiceUserDialog', () => {
  let component: ManagementNewServiceUserDialog;
  let fixture: ComponentFixture<ManagementNewServiceUserDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagementNewServiceUserDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(ManagementNewServiceUserDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
