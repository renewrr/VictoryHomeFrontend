import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPanelV2 } from './login-panel-v2';

describe('LoginPanelV2', () => {
  let component: LoginPanelV2;
  let fixture: ComponentFixture<LoginPanelV2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginPanelV2],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPanelV2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
