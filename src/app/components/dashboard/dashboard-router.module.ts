import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccountComponent } from "./dashboard/account/account.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DriversComponent } from "./dashboard/drivers/drivers.component";
import { GeofencesComponent } from "./dashboard/geofences/geofences.component";
import { GroupsComponent } from "./dashboard/groups/groups.component";

const routes: Routes = [
    {
      path: '',
      children: [
        {
          path: '', component: DashboardComponent
        },
        {
          path: 'groups', component: GroupsComponent
        },
        {
          path: 'drivers', component: DriversComponent
        },
        {
          path: 'account', component: AccountComponent
        },
        {
          path: 'geofences', component: GeofencesComponent
        }
      ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class  DashboardRoutingModule { }