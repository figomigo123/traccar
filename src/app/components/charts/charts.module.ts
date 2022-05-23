import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartJSComponent } from './chart-js/chart-js.component';
import { EchartComponent } from './echart/echart.component';
import { ApexComponent } from './apex/apex.component';
import { ChartistComponent } from './chartist/chartist.component';
import { ChartsRoutingModule } from './charts-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgxEchartsModule } from 'ngx-echarts';
import { ChartsModule } from 'ng2-charts';

import { ChartistModule } from 'ng-chartist';


@NgModule({
  declarations: [ ChartJSComponent, EchartComponent, ApexComponent, ChartistComponent],
  imports: [
    CommonModule,
    ChartsRoutingModule,
    NgbModule,
    NgApexchartsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    ChartsModule,
    ChartistModule
  ]
})
export class ChartModule { }
