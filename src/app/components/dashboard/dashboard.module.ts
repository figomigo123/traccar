import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-router.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { GroupsComponent } from './dashboard/groups/groups.component';
import { DriversComponent } from './dashboard/drivers/drivers.component';
import { AccountComponent } from './dashboard/account/account.component';
import { GeofenceComponent } from './dashboard/geofence/geofence.component';
import {GeofenceListComponent} from './dashboard/geofence-list/geofence-list.component';
import { MapComponent } from './dashboard/map/map.component';
import { DatePipe } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { DeviceStatusModalComponent } from './dashboard/device-status-modal/device-status-modal.component';
import { ReportModalComponent } from './dashboard/report-modal/report-modal.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { EventModalComponent } from './dashboard/event-modal/event-modal.component';
import { UserComponent } from './dashboard/user/user.component';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { MenuService, NzMenuModule } from 'ng-zorro-antd/menu';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzTreeModule } from 'ng-zorro-antd/tree';

import {
  NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
  NgxMatTimepickerModule
} from '@angular-material-components/datetime-picker';
import { NewUserComponent } from './dashboard/new-user/new-user.component';
import { NotificationsComponent } from '../notifications/notifications/notifications.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { GeofencesComponent } from './dashboard/geofences/geofences.component';
import { GenericService } from 'src/app/services/generic/generic.service';
import { AddComponent } from '../notifications/add/add.component';
import { IconDefinition } from '@ant-design/icons-angular';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { AccountBookFill, AlertFill, AlertOutline } from '@ant-design/icons-angular/icons';
import { AdddriverComponent } from '../addModules/addDriver/adddriver/adddriver.component';
import { AddgroupComponent } from '../addModules/addGroup/addgroup/addgroup.component';
import { AddgoefencesComponent } from '../addModules/addGoefences/addgoefences/addgoefences.component';
import { AddnotificationComponent } from '../addModules/addNotifications/addnotification/addnotification.component';
import { AddstatisticsComponent } from '../addModules/addstatistics/addstatistics/addstatistics.component';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { AddcalendarsComponent } from '../addModules/addcalendars/addcalendars/addcalendars.component';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { AddcommandsComponent } from '../addModules/addcommands/addcommands/addcommands.component';
import { AddmaintenanceComponent } from '../addModules/addmaintenance/addmaintenance/addmaintenance.component';
import { AddserverComponent } from '../addModules/addServer/addserver/addserver.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { GeofencesListComponent } from 'src/components/dashboard/geofences-list/geofences-list.component';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { GeofencesDrawerComponent } from './geofences-drawer/geofences-drawer.component';
import {TreeModule} from 'primeng/tree';
import {ContextMenuService, TreeNode} from 'primeng/api';
import {ContextMenuModule} from 'primeng/contextmenu';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { PermmissionsComponent } from '../notifications/permissions/Permmissions.component';

const icons: IconDefinition[] = [ AccountBookFill, AlertOutline, AlertFill ];

@NgModule({
  declarations: [DashboardComponent, GroupsComponent, DriversComponent, AccountComponent,
     ModalComponent, DeviceStatusModalComponent, ReportModalComponent,
    MapComponent, EventModalComponent,NotificationsComponent,AddComponent
    ,AdddriverComponent, UserComponent,AddnotificationComponent, NewUserComponent, GeofenceComponent, AddgoefencesComponent,
    AddgroupComponent,AddstatisticsComponent,AddcalendarsComponent,AddcommandsComponent,
    GeofenceListComponent,AddmaintenanceComponent,AddserverComponent,GeofencesDrawerComponent,PermmissionsComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgApexchartsModule,
    CarouselModule,
    NgSelectModule,
    NgbModule,
    NzTableModule,
    NzModalModule,
    HttpClientModule,
    LeafletModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    MatDatepickerModule, MatInputModule,
    NgxMatDatetimePickerModule,
    NgxMatNativeDateModule,
    NgxMatTimepickerModule,
    NzPopconfirmModule,
    NzFormModule,
    NzIconModule.forRoot(icons),
    NzInputModule,
    NzSelectModule,
    NzDatePickerModule,
    NzUploadModule,
    NzTreeModule,
    NzTabsModule,
    NzTagModule ,
    TreeModule,
    ContextMenuModule,
NzPaginationModule,
    NzEmptyModule,
    NzAvatarModule,
    NzBadgeModule,
    NzMenuModule,
    NzButtonModule,
    NzDrawerModule,
    NzDropDownModule
  ],
  providers: [DatePipe,GenericService,MenuService],
  exports: [MapComponent]
})
export class DashboardModule { }
