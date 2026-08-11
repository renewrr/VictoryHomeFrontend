import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileHandoverInputDialog } from './mobile-handover-input-dialog';

describe('MobileHandoverInputDialog', () => {
  let component: MobileHandoverInputDialog;
  let fixture: ComponentFixture<MobileHandoverInputDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileHandoverInputDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(MobileHandoverInputDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
