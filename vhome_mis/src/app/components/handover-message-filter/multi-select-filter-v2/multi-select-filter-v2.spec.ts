import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSelectFilterV2 } from './multi-select-filter-v2';

describe('MultiSelectFilterV2', () => {
  let component: MultiSelectFilterV2;
  let fixture: ComponentFixture<MultiSelectFilterV2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiSelectFilterV2],
    }).compileComponents();

    fixture = TestBed.createComponent(MultiSelectFilterV2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
