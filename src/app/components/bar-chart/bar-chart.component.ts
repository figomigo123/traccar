import { AfterViewInit, Component, Input, OnInit, SimpleChanges } from '@angular/core';
import * as c3 from 'c3';
const Chart = require('chart.js');
import { GenericService } from 'src/app/services/generic/generic.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit, AfterViewInit {
  @Input('sales') sales?: any[] = [];
  @Input('color') color: any = '';
  @Input('title') title: string = '';
  @Input('type') type: string = '';
  @Input('selector') selector: string = '';
  @Input('orderLabelsKey') orderLabelsKey:  any[] = [];
  @Input('orderTotalKey') orderTotalKey: string = '';
  
  orderLabels: any[] = [];
  orderTotal: any[] = [];

  colors: any = [
    'rgba(255, 99, 132, 1)',
    'rgba(255, 159, 64, 1)',
    'rgba(255, 205, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(201, 203, 207, 1)',
    'rgba(187, 135, 96, 1)',
    'rgba(79, 14, 14, 1)',
    'rgba(255, 99, 132, 1)',
    'rgba(255, 159, 64, 1)',
    'rgba(255, 205, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(201, 203, 207, 1)',
    'rgba(187, 135, 96, 1)',
    'rgba(79, 14, 14, 1)',    'rgba(201, 203, 207, 1)',

  ];

  chartColors: any[] = [];

  datasets: any[] = [];

  constructor(private service: GenericService) { }

  ngOnInit() {
    if (this.selector == 'week-chart') {
      this.orderLabels = [
        'الخميس',
        'الاربعاء',
        'الثلاثاء',
        'الاثنين',
        'الأحد',
        'السبت',
        'الجمعة',
      ]
    } else {
      (this.selector == 'month-chart') ? this.orderLabels = this.orderLabelsKey : []
    }

    this.orderTotal = this.sales;
    
  }

  ngAfterViewInit() {
    let ctx = document.getElementById(this.selector);

    let chart = new Chart(ctx, {
      type: this.type,
      data: {
        labels: [...this.orderLabels],
        datasets: [
          {
            label: this.title,
            data: [...this.orderTotal],
            borderColor: this.colors,
            color:"#FFFFFF",

            backgroundColor: (this.type == 'line') ? '' : this.colors,
          }
        ]
      }  
    })
    Chart.defaults.color = "#ffffff";

  }  
  ngOnChanges(changes: SimpleChanges) {
    for (const prop in changes) {
      if (changes.hasOwnProperty(prop)) {
        switch(prop) {
          case 'sales' :
            
            this.orderTotal = changes.sales.currentValue;
            if (this.selector == 'week-chart') {
              this.orderLabels = [
                'الخميس',
                'الاربعاء',
                'الثلاثاء',
                'الاثنين',
                'الأحد',
                'السبت',
                'الجمعة',
              ]
            } else {
            (this.selector == 'month-chart') ? this.orderLabels = changes.orderLabelsKey.currentValue:[]
            }
            (this.selector == 'week-chart' || this.selector == 'month-chart') && this.orderTotal.reverse();
            (this.selector == 'week-chart' || this.selector == 'month-chart') && this.orderLabels.reverse();
            this.ngAfterViewInit()          

            break;                                 
        }
      }
    } 
  }
}
