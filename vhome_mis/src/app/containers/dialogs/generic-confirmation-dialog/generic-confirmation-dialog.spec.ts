import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericConfirmationDialog } from './generic-confirmation-dialog';

describe('GenericConfirmationDialog', () => {
  let component: GenericConfirmationDialog;
  let fixture: ComponentFixture<GenericConfirmationDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenericConfirmationDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(GenericConfirmationDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
