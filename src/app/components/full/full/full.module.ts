import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FullRoutingModule } from './full-routing.module';
import { FullComponent } from '../full.component';
import { PerfectScrollbarConfigInterface, PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { SidebarComponent } from 'src/app/shared/components/sidebar/sidebar.component';
import { NavigationComponent } from '../../elements/navigation/navigation.component';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';
import { mainSidebarComponent } from '../../shared/sidebar/sidebar.component';
import { mainNavigationComponent } from '../../shared/header-navigation/navigation.component';


@NgModule({
  declarations: [FullComponent,
    mainNavigationComponent,
    BreadcrumbComponent,
    mainSidebarComponent,
  ],
  imports: [
    CommonModule,
    NgbModalModule,
    FullRoutingModule,
    SharedModule
    


  ],providers:[
   
  ]
})
export class FullModule { }
