import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehavioralReport } from './behavioral-report';

describe('BehavioralReport', () => {
  let component: BehavioralReport;
  let fixture: ComponentFixture<BehavioralReport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BehavioralReport],
    }).compileComponents();

    fixture = TestBed.createComponent(BehavioralReport);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
