import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoFactorDialog } from './two-factor-dialog';

describe('TwoFactorDialog', () => {
  let component: TwoFactorDialog;
  let fixture: ComponentFixture<TwoFactorDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoFactorDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(TwoFactorDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
