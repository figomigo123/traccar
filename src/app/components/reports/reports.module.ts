import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { MainReportsComponent } from './main-reports/main-reports.component';
import { BarChartComponent } from '../bar-chart/bar-chart.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzNotificationModule, NzNotificationService } from 'ng-zorro-antd/notification';
import { GenericService } from 'src/app/services/generic/generic.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { ExportExcelComponent } from './export-excel/export-excel.component';


@NgModule({
  declarations: [MainReportsComponent,BarChartComponent, ExportExcelComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReportsRoutingModule,
    NzTableModule,
    NzNotificationModule

  ],providers:[GenericService]
})
export class ReportsModule { }
