import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './authentication/login-page/login-page.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { AuthGuard } from './services/auth.guard';
import { HoriFullLayoutComponent } from './shared/layouts-horizontal/hori-full-layout/hori-full-layout.component';
import { ContentLayoutComponent } from './shared/layouts/content-layout/content-layout.component';
import { FullLayoutComponent } from './shared/layouts/full-layout/full-layout.component';
import { COUNTENT_ROUTES } from './shared/routes/content.routes';
import { Full_Content_Routes } from './shared/routes/full.routes';

const routes: Routes = [
  //{ path:'', redirectTo:'login',pathMatch:'full'},
  {path:'', component:DashboardComponent,canActivate:[AuthGuard]},
  { path: 'login', component: LoginPageComponent},
  // { path: '', component: FullLayoutComponent, children: Full_Content_Routes },
  { path: '', component: HoriFullLayoutComponent, children: Full_Content_Routes, canActivate: [AuthGuard]},
  { path: '', component: ContentLayoutComponent, children: COUNTENT_ROUTES },
  
      
  {
    path: 'reports',
    loadChildren: () => import('./components/full/full/full.module').then(m => m.FullModule)
  }
 // { path: '**', redirectTo: 'login' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ AuthGuard ]
})
export class AppRoutingModule { }
