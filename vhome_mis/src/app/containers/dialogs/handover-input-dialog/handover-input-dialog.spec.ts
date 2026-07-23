import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandoverInputDialog } from './handover-input-dialog';

describe('HandoverInputDialog', () => {
  let component: HandoverInputDialog;
  let fixture: ComponentFixture<HandoverInputDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HandoverInputDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(HandoverInputDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
