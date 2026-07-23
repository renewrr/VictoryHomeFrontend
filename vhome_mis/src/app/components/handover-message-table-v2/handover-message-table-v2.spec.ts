import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandoverMessageTableV2 } from './handover-message-table-v2';

describe('HandoverMessageTableV2', () => {
  let component: HandoverMessageTableV2;
  let fixture: ComponentFixture<HandoverMessageTableV2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HandoverMessageTableV2],
    }).compileComponents();

    fixture = TestBed.createComponent(HandoverMessageTableV2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
