import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileEditSheet } from './mobile-edit-sheet';

describe('MobileEditSheet', () => {
  let component: MobileEditSheet;
  let fixture: ComponentFixture<MobileEditSheet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileEditSheet],
    }).compileComponents();

    fixture = TestBed.createComponent(MobileEditSheet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
