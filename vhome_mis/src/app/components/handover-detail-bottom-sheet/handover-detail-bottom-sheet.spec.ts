import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandoverDetailBottomSheet } from './handover-detail-bottom-sheet';

describe('HandoverDetailBottomSheet', () => {
  let component: HandoverDetailBottomSheet;
  let fixture: ComponentFixture<HandoverDetailBottomSheet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HandoverDetailBottomSheet],
    }).compileComponents();

    fixture = TestBed.createComponent(HandoverDetailBottomSheet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
