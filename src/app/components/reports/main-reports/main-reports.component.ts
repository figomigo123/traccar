import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { ReportsService } from 'src/app/services/reports/reports.service';

@Component({
  selector: 'app-main-reports',
  templateUrl: './main-reports.component.html',
  styleUrls: ['./main-reports.component.scss']
})
export class MainReportsComponent implements OnInit {
  counts
  BarChart
  BarChartkeys
  constructor(private reportsService:ReportsService) { }

  async ngOnInit(): Promise<void> {

   const reports =  await Promise.all([this.reportsService.GetStatusReport(), this.reportsService.GetEventsReport()])
    this.counts = reports[0]

    this.BarChart = Object.values(reports[1])
    this.BarChartkeys = Object.keys(reports[1])
    console.log(this.BarChart)
  }

}
