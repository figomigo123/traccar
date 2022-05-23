import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ApexComponent } from "./apex/apex.component";
import { ChartJSComponent } from "./chart-js/chart-js.component";
import { ChartistComponent } from "./chartist/chartist.component";
import { EchartComponent } from "./echart/echart.component";

const routes: Routes = [
    {
      path: '',
      children: [
        {
            path: 'apex', component: ApexComponent
        },
        {
            path: 'chartJs', component: ChartJSComponent
        },
        {
            path: 'chartlist', component: ChartistComponent
        },
        {
            path: 'echart', component: EchartComponent
        }
      ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class  ChartsRoutingModule { }