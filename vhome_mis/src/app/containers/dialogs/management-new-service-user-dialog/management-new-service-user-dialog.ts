import { Component, computed, inject } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelect, MatSelectModule, MatSelectTrigger } from '@angular/material/select';
import { ActiveAreaService } from '../../../services/active-area-service';
import { MatOptionModule } from '@angular/material/core';
import { MatChipEditedEvent, MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatDividerModule } from '@angular/material/divider';
import { AssetEvent, BuildingEventBus } from '../../../services/building-event-bus';
import { ServiceUserTableService } from '../../../services/service-user-table-service';
import { ServiceUserInputServiceUserInputData } from '../../../core/api-client-v2';

export interface nicknameData {
  body: string;
  id: number;
}

export interface serviceUserData {
  name: FormControl<string>;
  livingSpaceID: FormControl<number | null>;
  nicknames: FormControl<nicknameData[]>;
}

export interface NewServiceUserSchema {
  serviceUsers: FormArray<FormGroup<serviceUserData>>;
}

@Component({
  selector: 'app-management-new-service-user-dialog',
  imports: [
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    MatOptionModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatDividerModule,
  ],
  templateUrl: './management-new-service-user-dialog.html',
  styleUrl: './management-new-service-user-dialog.scss',
})
export class ManagementNewServiceUserDialog {
  readonly addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  constructor(private fb: FormBuilder) {}
  serviceUserForm!: FormGroup<NewServiceUserSchema>;
  activeAreaService = inject(ActiveAreaService);
  userService = inject(ServiceUserTableService)
  private dialogRef = inject(MatDialogRef<ManagementNewServiceUserDialog>);
  eventBus = inject(BuildingEventBus);


  ngOnInit() {
    this.serviceUserForm = this.fb.group<NewServiceUserSchema>({
      serviceUsers: this.fb.array<FormGroup<serviceUserData>>([]),
    });
    this.addSecondary();
  }

  get pendingServiceUsers(): FormArray<FormGroup<serviceUserData>> {
    return this.serviceUserForm.controls.serviceUsers;
  }

  addSecondary() {
    const newUsr: FormGroup<serviceUserData> = this.fb.group({
      name: this.fb.control<string>('', {
        nonNullable: true,
        validators: Validators.required,
      }),
      livingSpaceID: this.fb.control<number>(-1, {
        validators: Validators.required,
      }),
      nicknames: this.fb.control<nicknameData[]>([], {
        nonNullable: true,
      }),
    });
    this.pendingServiceUsers.push(newUsr);
  }

  removeSecondary(index: number) {
    this.pendingServiceUsers.controls.splice(index, 1);
    this.pendingServiceUsers.controls.map((ctrl) => ctrl.updateValueAndValidity());
    this.serviceUserForm.updateValueAndValidity();
  }

  editNickname(
    nickname: nicknameData,
    event: MatChipEditedEvent,
    usrForm: FormGroup<serviceUserData>,
    index: number,
  ) {
    const val = event.value.trim();
    if (val.length > 0) {
      nickname.body = event.value;
    } else {
      this.removeNickname(usrForm, index);
    }
  }

  addNickname(index: number, event: MatChipInputEvent) {
    const val = event.value.trim();
    if (val.length > 0) {
      this.pendingServiceUsers.controls[index].value.nicknames?.push({
        body: event.value.trim(),
        id: -1,
      });
      event.chipInput.clear();
    }
  }
  addNicknameFromButton(index: number, inputElement: HTMLInputElement) {
    const val = inputElement.value.trim();
    if (val.length > 0) {
      this.pendingServiceUsers.controls[index].value.nicknames?.push({
        body: val,
        id: -1,
      });
    }
    inputElement.value = '';
  }
  removeNickname(usrForm: FormGroup<serviceUserData>, index: number) {
    usrForm.value.nicknames?.splice(index, 1);
    this.pendingServiceUsers.controls.map((ctrl) => ctrl.updateValueAndValidity());
    this.serviceUserForm.updateValueAndValidity();
  }
  commitAddition() {
    const dataRows: ServiceUserInputServiceUserInputData[] = [];
    for (const serviceUser of this.serviceUserForm.controls.serviceUsers.value) {
      if (serviceUser.livingSpaceID && serviceUser.name && serviceUser.nicknames) {
        if (serviceUser.livingSpaceID == -1) {
          serviceUser.livingSpaceID = null;
        }
        dataRows.push({
          name: serviceUser.name,
          living_space_id: serviceUser.livingSpaceID,
          nicknames: serviceUser.nicknames?.map((nn) => nn.body),
        });
      }
    }
    this.userService.addUsers(dataRows).subscribe({
      next: (response) => {
        console.log('Data received successfully');
        this.dialogRef.close();
      },
      error: (error) => {
        console.error('An error occurred:', error);
        this.eventBus.emit(AssetEvent.BuildingModified);
      },
    });
  }
  getSpaceName(spaceId: number | null) {
    let name = '非住宿';
    for (const ls of this.activeAreaService.livingSpaces()) {
      if (ls.ID == spaceId) {
        name = ls.name;
        break;
      }
    }
    return name;
  }
}
