import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExportExcelComponent } from './export-excel/export-excel.component';
import { MainReportsComponent } from './main-reports/main-reports.component';

const routes: Routes = [ {
  path: '',
  children: [
      {
          path: 'new',
          component: MainReportsComponent,
          data: {
              title: 'Summary',
          }                
      },
      {
        path: 'excel',
        component: ExportExcelComponent,
        data: {
            title: 'Excel Reports',
        }                
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
