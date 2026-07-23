import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarFilter } from './search-bar-filter';

describe('SearchBarFilter', () => {
  let component: SearchBarFilter;
  let fixture: ComponentFixture<SearchBarFilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchBarFilter],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchBarFilter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
