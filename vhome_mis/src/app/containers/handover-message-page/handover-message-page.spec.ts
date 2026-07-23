import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandoverMessagePage } from './handover-message-page';

describe('HandoverMessagePage', () => {
  let component: HandoverMessagePage;
  let fixture: ComponentFixture<HandoverMessagePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HandoverMessagePage],
    }).compileComponents();

    fixture = TestBed.createComponent(HandoverMessagePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
