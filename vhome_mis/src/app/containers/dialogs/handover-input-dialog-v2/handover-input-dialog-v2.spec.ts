import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandoverInputDialogV2 } from './handover-input-dialog-v2';

describe('HandoverInputDialogV2', () => {
  let component: HandoverInputDialogV2;
  let fixture: ComponentFixture<HandoverInputDialogV2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HandoverInputDialogV2],
    }).compileComponents();

    fixture = TestBed.createComponent(HandoverInputDialogV2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
