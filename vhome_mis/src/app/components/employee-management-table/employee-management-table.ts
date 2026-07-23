import { Component, computed, inject, Input, Signal } from '@angular/core';
import { EmployeeStateService } from '../../services/employee-state-service';
import { ManagementEmployeeResponseEmployeeDetails } from '../../core/api-client-v2';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { TranslateModule } from '@ngx-translate/core';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { LocalizationService } from '../../services/localization-service';
import { QRCodeComponent } from 'angularx-qrcode';

@Component({
  selector: 'app-employee-management-table',
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    TranslateModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    QRCodeComponent,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './employee-management-table.html',
  styleUrl: './employee-management-table.scss',
})
export class EmployeeManagementTable {
  employeeService = inject(EmployeeStateService);
  employeeData = computed(() => this.employeeService.employeeData());
  displayedColumns = ['name', 'email', 'account', 'password', 'totp', 'editRow'];

  ngOnInit() {}

  asEmployee(
    employee: ManagementEmployeeResponseEmployeeDetails,
  ): ManagementEmployeeResponseEmployeeDetails {
    return employee as ManagementEmployeeResponseEmployeeDetails;
  }

  pageChanged(event: PageEvent) {
    this.employeeService.changePage(event);
  }

  asDateString(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleDateString('zh-Hant');
  }

  hidePassword(password: string | undefined | null) {
    if (password) return '*'.repeat(password.length);
    return '';
  }

  toURI(employee: ManagementEmployeeResponseEmployeeDetails) {
    const issuerName = 'VictoryHome';

    if (employee.auth?.account && employee.auth?.totp_secret) {
      return `otpauth://totp/${issuerName}:${employee.auth.account}?secret=${employee.auth.totp_secret}&issuer=${issuerName}&digits=6&period=30`;
    } else {
      return '';
    }
  }

  forcedLogout(employee: ManagementEmployeeResponseEmployeeDetails) {
    this.employeeService.forcedLogout(employee);
  }
}
