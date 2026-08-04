import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileLoginPanel } from './mobile-login-panel';

describe('MobileLoginPanel', () => {
  let component: MobileLoginPanel;
  let fixture: ComponentFixture<MobileLoginPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileLoginPanel],
    }).compileComponents();

    fixture = TestBed.createComponent(MobileLoginPanel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
