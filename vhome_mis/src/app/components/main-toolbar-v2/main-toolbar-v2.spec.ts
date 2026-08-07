import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainToolbarV2 } from './main-toolbar-v2';

describe('MainToolbarV2', () => {
  let component: MainToolbarV2;
  let fixture: ComponentFixture<MainToolbarV2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainToolbarV2],
    }).compileComponents();

    fixture = TestBed.createComponent(MainToolbarV2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
