import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileHandoverPanel } from './mobile-handover-panel';

describe('MobileHandoverPanel', () => {
  let component: MobileHandoverPanel;
  let fixture: ComponentFixture<MobileHandoverPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileHandoverPanel],
    }).compileComponents();

    fixture = TestBed.createComponent(MobileHandoverPanel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
