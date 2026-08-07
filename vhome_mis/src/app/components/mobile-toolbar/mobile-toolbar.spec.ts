import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileToolbar } from './mobile-toolbar';

describe('MobileToolbar', () => {
  let component: MobileToolbar;
  let fixture: ComponentFixture<MobileToolbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileToolbar],
    }).compileComponents();

    fixture = TestBed.createComponent(MobileToolbar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
