import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicTablesComponent } from './basic-tables/basic-tables.component';
import { DataTablesComponent } from './data-tables/data-tables.component';
import { TableRoutingModule } from './tables-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [BasicTablesComponent, DataTablesComponent],
  imports: [
    CommonModule,TableRoutingModule,
    NgxDatatableModule,
    NgbModule
  ]
})
export class TablesModule { }
