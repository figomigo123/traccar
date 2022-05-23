import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/services/auth.guard';
import { FullComponent } from '../full.component';

const routes: Routes = [ {
  path: '',
  component: FullComponent,
  children: [
    { path: '',        canActivate: [AuthGuard],
    redirectTo: '/authentication/login', pathMatch: 'full'

  },

    {
      path: 'dashboard',
      canActivate: [AuthGuard],

      loadChildren: () => import('../../reports/reports.module').then(m => m.ReportsModule),

    }
    ]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FullRoutingModule { }
