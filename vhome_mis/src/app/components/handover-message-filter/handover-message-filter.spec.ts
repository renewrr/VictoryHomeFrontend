import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandoverMessageFilter } from './handover-message-filter';

describe('HandoverMessageFilter', () => {
  let component: HandoverMessageFilter;
  let fixture: ComponentFixture<HandoverMessageFilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HandoverMessageFilter],
    }).compileComponents();

    fixture = TestBed.createComponent(HandoverMessageFilter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
