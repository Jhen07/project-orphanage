import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule, NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { EldersComponent } from './elders/elders.component';
import { StaffComponent } from './staff/staff.component';
import { HospitalsComponent } from './hospitals/hospitals.component';
import { ReportsComponent } from './reports/reports.component';
import { MedicineInventoryComponent } from './medicine-inventory/medicine-inventory.component';
import { GuessMonitoringComponent } from './guess-monitoring/guess-monitoring.component';
import { ArchivesComponent } from './archives/archives.component';
import { SystemUsersComponent } from './system-users/system-users.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { EldersDetailsComponent } from './elders-details/elders-details.component';
import { StaffDetailsComponent } from './staff-details/staff-details.component';
import { HospitalDetailsComponent } from './hospital-details/hospital-details.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { ModalComponent } from './bs-component/components';
import { FormsModule } from '@angular/forms';
import { EldersAddPageComponent } from './elders-add-page/elders-add-page.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        TranslateModule,
        NgbDropdownModule,
        FullCalendarModule,
        NgbModalModule,
        NgbModule,
        FormsModule,
    ],
    declarations: [
        LayoutComponent,
        SidebarComponent,
        HeaderComponent,
        MainDashboardComponent,
        EldersComponent,
        StaffComponent,
        HospitalsComponent,
        ReportsComponent,
        MedicineInventoryComponent,
        GuessMonitoringComponent,
        ArchivesComponent,
        SystemUsersComponent,
        DoctorListComponent,
        EldersDetailsComponent,
        StaffDetailsComponent,
        HospitalDetailsComponent,
        EldersAddPageComponent]
})
export class LayoutModule { }
