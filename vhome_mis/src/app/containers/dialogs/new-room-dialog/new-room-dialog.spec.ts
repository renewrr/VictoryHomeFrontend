import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRoomDialog } from './new-room-dialog';

describe('NewRoomDialog', () => {
  let component: NewRoomDialog;
  let fixture: ComponentFixture<NewRoomDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewRoomDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(NewRoomDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
