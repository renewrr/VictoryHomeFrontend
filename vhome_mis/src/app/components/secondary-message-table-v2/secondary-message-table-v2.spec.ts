import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryMessageTableV2 } from './secondary-message-table-v2';

describe('SecondaryMessageTableV2', () => {
  let component: SecondaryMessageTableV2;
  let fixture: ComponentFixture<SecondaryMessageTableV2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondaryMessageTableV2],
    }).compileComponents();

    fixture = TestBed.createComponent(SecondaryMessageTableV2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
