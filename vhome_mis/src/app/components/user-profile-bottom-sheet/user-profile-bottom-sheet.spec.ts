import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileBottomSheet } from './user-profile-bottom-sheet';

describe('UserProfileBottomSheet', () => {
  let component: UserProfileBottomSheet;
  let fixture: ComponentFixture<UserProfileBottomSheet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserProfileBottomSheet],
    }).compileComponents();

    fixture = TestBed.createComponent(UserProfileBottomSheet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
