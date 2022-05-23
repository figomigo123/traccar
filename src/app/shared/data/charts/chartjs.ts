import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';


//BarChart
export let barChartOptions: ChartOptions = {
  maintainAspectRatio: false,
  responsive: true,
  legend: {
    display: false,
  },
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true,
        fontSize: 10,
        max: 80,
        fontColor: "rgb(171, 167, 167,0.9)",
      },
      gridLines: {
      display: true,
      color: 'rgba(171, 167, 167,0.2)',
      drawBorder: false
      },
    }],
    xAxes: [{
      ticks: {
        beginAtZero: true,
        fontSize: 11,
        fontColor: "rgb(171, 167, 167,0.9)",
      },
      gridLines: {
        display: true,
        color: 'rgba(171, 167, 167,0.2)',
        drawBorder: false
      },
    }]
  }
};
export let barChartLabels: Label[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
export let barChartType: ChartType = 'bar';
export let barChartLegend = true;
export let barChartPlugins = [];
export let barChartData: ChartDataSets[] = [
  {
    label: '# of Votes',
    data: [12, 39, 20, 10, 25, 18],
    barPercentage: 0.6,
  }
];
export let barChartColors: Color[] = [
  {
    backgroundColor: '#285cf7'
  }
]


// Transparency Bar Chart
export let transparentBarOptions: ChartOptions = {
  maintainAspectRatio: false,
  responsive: true,
  legend: {
    display: false,
    
  },
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true,
        fontSize: 10,
        max: 80,
        fontColor: "rgb(171, 167, 167,0.9)",
      },
      gridLines: {
        display: true,
        color: 'rgba(171, 167, 167,0.2)',
        drawBorder: false
      },
    }],
    xAxes: [{
      ticks: {
        beginAtZero: true,
        fontSize: 11,
        fontColor: "rgb(171, 167, 167,0.9)",
      },
      gridLines: {
        display: true,
        color: 'rgba(171, 167, 167,0.2)',
        drawBorder: false
      },
    }]
  }
}
export let transparentBarLabels: Label[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
export let transparentBarType: ChartType = 'bar';
export let transparentBarLegend = true;
export let transparentBarPlugins = [];
export let transparentBarData: ChartDataSets[] = [
  {
    data: [12, 39, 20, 10, 25, 18],
    label: '# of Votes',
    barPercentage: 0.6,
  }
];
export let transparentBarColors: Color[] = [
  {
    backgroundColor: 'rgba(0,123,255,.5)'
  }
]

//Gradient Bar Chart

export let gradientBarOptions: ChartOptions = {
  maintainAspectRatio: false,
  responsive: true,
  legend: {
    display: false,
  },
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true,
        fontSize: 10,
        max: 80,
        fontColor: "rgb(171, 167, 167,0.9)",
      },
      gridLines: {
        display: true,
        color: 'rgba(171, 167, 167,0.2)',
        drawBorder: false
      },
    }],
    xAxes: [{
      ticks: {
        beginAtZero: true,
        fontSize: 11,
        fontColor: "rgb(171, 167, 167,0.9)",
      },
      gridLines: {
        display: true,
        color: 'rgba(171, 167, 167,0.2)',
        drawBorder: false
      },
    }]
  }
}
export let gradientBarLabels: Label[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
export let gradientBarType: ChartType = 'bar';
export let gradientBarLegend = true;
export let gradientBarPlugins = []
export let gradientBarData: ChartDataSets[] = [
  {
    data:[12, 39, 20, 10, 25, 18],
    label: '# of Votes',
    barPercentage: 0.6,
  }
];


// let Barcanvas: ElementRef;
// let Barctx = Barcanvas.nativeElement.getContext('2d');
// let gradient = Barctx.createLinearGradient(0, 0, 0, 250);
// gradient.addColorStop(0, '#20c2fa');
// gradient.addColorStop(1, '#705ec8');

export let gradientBarColor = [
  'createLinearGradient(0, 0, 0, 250)'
]


//Horizontal Bar
export let HorizontalBarOptions: ChartOptions = {
  maintainAspectRatio: false,
  responsive: true,
  legend: {
    display: false,
  },
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true,
        fontSize: 10,
        fontColor: "rgb(171, 167, 167,0.9)",
      },
      gridLines: {
        display: true,
        color: 'rgba(171, 167, 167,0.2)',
        drawBorder: false
      },
    }],
    xAxes: [{
      ticks: {
        beginAtZero: true,
        fontSize: 11,
        max: 80,
        fontColor: "rgb(171, 167, 167,0.9)",
      },
      gridLines: {
        display: true,
        color: 'rgba(171, 167, 167,0.2)',
        drawBorder: false
      },
    }]
  }
}
export let HorizontalBarLabels: Label[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
export let HorizontalBarType: ChartType = 'horizontalBar';
export let HorizontalBarLegend = true;
export let HorizontalBarPlugins = []

export let HorizontalBarData: ChartDataSets[] = [
  {
    data: [12, 39, 20, 10, 25, 18],
    label: '# of Votes',
    barPercentage: 0.6,
  }
];
export let HorizontalBarColors: Color[] = [
  {
    backgroundColor: ['#285cf7', '#f10075', '#673ab7', '#ffc107', '#7987a1', '#7571f9']
  }
]

//Horizontal Bar2
export let Horizontal2Options: ChartOptions = {
  maintainAspectRatio: false,
  responsive: true,
  legend: {
    display: false,
  },
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true,
        fontSize: 11,
        fontColor: "rgb(171, 167, 167,0.9)",
      },
      gridLines: {
        display: true,
        color: 'rgba(171, 167, 167,0.2)',
        drawBorder: false
      },
    }],
    xAxes: [{
      ticks: {
        beginAtZero: true,
        fontSize: 11,
        max: 80,
        fontColor: "rgb(171, 167, 167,0.9)",
      },
      gridLines: {
        display: true,
        color: 'rgba(171, 167, 167,0.2)',
        drawBorder: false
      },
    }]
  }
}
export let Horizontal2Labels: Label[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
export let Horizontal2Type: ChartType = 'horizontalBar';
export let Horizontal2Legend = true;
export let Horizontal2Plugins = []

export let Horizontal2Data: ChartDataSets[] = [
  {
    data: [12, 39, 20, 10, 25, 18],
  },
  {
    data: [22, 30, 25, 30, 20, 40],
  }
];

export let Horizontal2Colors: Color[] = [
  {
    backgroundColor: ['#285cf7', '#f10075', '#673ab7', '#ffc107', '#7987a1', '#7571f9']
  },
  {
    backgroundColor: 'rgba(0,123,255,.5)'
  }
]

//Vertical Stacked Bar Chart
export let verticalStackOptions: ChartOptions = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true,
        fontSize: 11,
        fontColor: "rgb(171, 167, 167,0.9)",
      },
      gridLines: {
        display: true,
        color: 'rgba(171, 167, 167,0.2)',
        drawBorder: false
      },
    }],
    xAxes: [{
      ticks: {
        beginAtZero: true,
        fontSize: 11,
        max: 80,
        fontColor: "rgb(171, 167, 167,0.9)",
      },
      gridLines: {
        display: true,
        color: 'rgba(171, 167, 167,0.2)',
        drawBorder: false
      },
    }]
  }
}
export let verticalStackLabels: Label[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
export let verticalStackType: ChartType = 'bar';
export let verticalStackLegend = true;
export let verticalStackData: ChartDataSets[] = [
  {
    data: [10, 24, 20, 25, 35, 50],
    fill: true
  },
  {
    data: [10, 24, 20, 25, 35, 50],
    fill: true
  },
  {
    data:  [20, 30, 28, 33, 45, 65],
    fill: true
  }
]
export let verticalStackColors: Color[] = [
  {
    backgroundColor:'#314d83',
    borderWidth: 1,
  },
  {
    backgroundColor: '#007bff',
    borderWidth: 1,
  },
  {
    backgroundColor: '#cad0e8',
    borderWidth: 1,
  }
]

//Horizontal Stacked Bar Chart
export let horizontalStackOptions: ChartOptions = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    yAxes: [{
      stacked: true,
      ticks: {
        beginAtZero: true,
        fontSize: 11,
        fontColor: "rgb(171, 167, 167,0.9)",
      },
      gridLines: {
        display: true,
        color: 'rgba(171, 167, 167,0.2)',
        drawBorder: false
      },
    }],
    xAxes: [{
      stacked: true,
      ticks: {
        fontSize: 11,
        fontColor: "rgb(171, 167, 167,0.9)",
      },
      gridLines: {
        display: true,
        color: 'rgba(171, 167, 167,0.2)',
        drawBorder: false
      },
    }]
  }
}
export let horizontalStackLabels: Label[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
export let horizontalStackType: ChartType = 'horizontalBar';
export let horizontalStackLegend = true;
export let horizontalStackData: ChartDataSets[] = [
  {
    data: [10, 24, 20, 25, 35, 50],
    fill: true
  },
  {
    data: [10, 24, 20, 25, 35, 50],
    fill: true
  },
  {
    data: [20, 30, 28, 33, 45, 65],
    fill: true
  }
]
export let horizontalStackColors: Color[] = [
  {
    backgroundColor: '#314d83',
    borderWidth: 1,
  },
  {
    backgroundColor: '#007bff',
    borderWidth: 1,
  },
  {
    backgroundColor: '#cad0e8',
    borderWidth: 1,
  }
]


//Line Charts
export let lineChartOptions: ChartOptions = {
  maintainAspectRatio: false,
  responsive: true,
  legend: {
    display: false
  },
  scales: {
    yAxes: [{
      stacked: true,
      ticks: {
        beginAtZero: true,
        fontSize: 10,
        max: 80,
        fontColor: "rgb(171, 167, 167,0.9)",
      },
      gridLines: {
        display: true,
        color: 'rgba(171, 167, 167,0.2)',
        drawBorder: false
      },
    }],
    xAxes: [{
      stacked: true,
      ticks: {
        beginAtZero: true,
        fontSize: 11,
        fontColor: "rgb(171, 167, 167,0.9)",
      },
      gridLines: {
        display: true,
        color: 'rgba(171, 167, 167,0.2)',
        drawBorder: false
      },
    }]
  }
};
export let lineChartLabels: Label[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
export let lineChartType: ChartType = 'line';
export let lineChartLegend = true;
export let lineChartData: ChartDataSets[] = [
  {
    data: [12, 15, 18, 40, 35, 38, 32, 20, 25, 15, 25, 30],
    fill: false
  },
  {
    data: [0, 20, 25, 30, 30, 35, 25, 30, 45, 35, 55, 40],
    fill: false
  },
];
export let lineChartColors: Color[] = [
  {
    borderColor: '#00cccc',
    borderWidth: 1,
  },
  {
    borderColor: '#007bff',
    borderWidth: 1,
  },
];

//Area Chart
export let AreaChartOptions: ChartOptions = {
  maintainAspectRatio: false,
  responsive: true,
  legend: {
    display: false,
  },
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true,
        fontSize: 10,
        max: 80,
        fontColor: "rgb(171, 167, 167,0.9)",
      },
      gridLines: {
        display: true,
        color: 'rgba(171, 167, 167,0.2)',
        drawBorder: false
      },
    }],
    xAxes: [{
      ticks: {
        beginAtZero: true,
        fontSize: 11,
        fontColor: "rgb(171, 167, 167,0.9)",
      },
      gridLines: {
        display: true,
        color: 'rgba(171, 167, 167,0.2)',
        drawBorder: false
      },
    }]
  }
}
export let AreaChartLabels: Label[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
export let AreaChartType: ChartType = 'line';
export let AreaChartData: ChartDataSets[] = [
  { data:[12, 15, 18, 40, 35, 38, 32, 20, 25, 15, 25, 30], },
  { data:  [10, 20, 25, 55, 50, 45, 35, 37, 45, 35, 55, 40] }
]

// let canvas: ElementRef
// let ctx: CanvasRenderingContext2D = canvas.nativeElement.getContext('2d');
// let areaGradient1 = ctx.createLinearGradient(0, 350, 0, 0);
// areaGradient1.addColorStop(0, 'rgba(241, 0, 117,0)');
// areaGradient1.addColorStop(1, 'rgba(241, 0, 117,.5)');

// let areaGradient2 = ctx.createLinearGradient(0, 280, 0, 0);
// areaGradient2.addColorStop(0, 'rgba(86, 70, 255,0)');
// areaGradient2.addColorStop(1, 'rgba(86, 70, 255,.5)');

export let AreaChartColors: Color[] = [
  {
    borderColor: '#00cccc',
    borderWidth: 1,
  },
  {
    borderColor: '#007bff',
    borderWidth: 1,
  }

]



//DoughNut Chart and Pie chart data
export let PieChartLabels: Label[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
export let PieChartData: ChartDataSets[] = [
  {
    data: [20, 20, 30, 5, 25],
    backgroundColor: ['#285cf7', '#f10075', '#00cccc', '#7987a1', '#74de00']
  }

]
export let PieChartOptions: ChartOptions = {
  maintainAspectRatio: false,
  responsive: true,
  legend: {
    display: false
  },
  animation: {
    animateScale: true,
    animateRotate: true
  }
  
}
export let DoughnutChartType: ChartType = 'doughnut';
export let PieChartType: ChartType = 'pie';

