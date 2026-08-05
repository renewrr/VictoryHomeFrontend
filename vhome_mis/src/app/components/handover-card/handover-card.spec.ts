import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandoverCard } from './handover-card';

describe('HandoverCard', () => {
  let component: HandoverCard;
  let fixture: ComponentFixture<HandoverCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HandoverCard],
    }).compileComponents();

    fixture = TestBed.createComponent(HandoverCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
