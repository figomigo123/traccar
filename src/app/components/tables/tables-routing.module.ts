import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BasicTablesComponent } from "./basic-tables/basic-tables.component";
import { DataTablesComponent } from "./data-tables/data-tables.component";

const routes: Routes = [
    {
      path: '',
      children: [
        {
            path: 'basic-tables', component: BasicTablesComponent
        },
        {
            path: 'data-tables', component: DataTablesComponent
        }
      ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class  TableRoutingModule { }