import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './authentication/login-page/login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule, DatePipe, registerLocaleData } from '@angular/common';
import { NgxMatDatetimePickerModule, NgxMatNativeDateModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MainReportsComponent } from './components/reports/main-reports/main-reports.component';
import { ChartistModule } from 'ng-chartist';
import en from '@angular/common/locales/en';

import { ChartsModule } from 'ng2-charts';
import { NzNotificationModule, NzNotificationService } from 'ng-zorro-antd/notification';
import { GenericService } from './services/generic/generic.service';
import { PerfectScrollbarConfigInterface, PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { NotificationsComponent } from './components/notifications/notifications/notifications.component';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { MainService } from './services/main.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { IconDefinition } from '@ant-design/icons-angular';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { AccountBookFill, AlertFill, AlertOutline } from '@ant-design/icons-angular/icons';
import { ContextMenuService } from 'primeng/api';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 1,
  wheelPropagation: true,
  minScrollbarLength: 20
};

const icons: IconDefinition[] = [ AccountBookFill, AlertOutline, AlertFill ];

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PerfectScrollbarModule,
    RouterModule,
    SharedModule,
    NgSelectModule,
    HttpClientModule,
    NgxMatNativeDateModule,
    MatDialogModule,
    NzIconModule.forRoot(icons),

   // NgxMatMomentModule,
    MatDatepickerModule,
    NgxMatDatetimePickerModule,
    MatInputModule,
    NgxMatTimepickerModule,
    ToastrModule.forRoot(),
    ChartsModule,
    ChartistModule,
    
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    DatePipe, ContextMenuService,   GenericService,MainService,NzModalService,NzNotificationService,NgbActiveModal
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
