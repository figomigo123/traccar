import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IconsComponent } from "./icons/icons.component";

const routes: Routes = [
    {
      path: '',
      children: [
        {
            path: '', component: IconsComponent
        }
       
      ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class  IconsRoutingModule { }