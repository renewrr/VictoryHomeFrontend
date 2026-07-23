import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandoverDetailsDialogV2 } from './handover-details-dialog-v2';

describe('HandoverDetailsDialogV2', () => {
  let component: HandoverDetailsDialogV2;
  let fixture: ComponentFixture<HandoverDetailsDialogV2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HandoverDetailsDialogV2],
    }).compileComponents();

    fixture = TestBed.createComponent(HandoverDetailsDialogV2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
