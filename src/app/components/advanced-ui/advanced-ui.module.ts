import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion/accordion.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CollapseComponent } from './collapse/collapse.component';
import { ModalsComponent } from './modals/modals.component';
import { TimelineComponent } from './timeline/timeline.component';
import { SweetAlertComponent } from './sweet-alert/sweet-alert.component';
import { RatingsComponent } from './ratings/ratings.component';
import { CountersComponent } from './counters/counters.component';
import { SearchComponent } from './search/search.component';
import { UserlistComponent } from './userlist/userlist.component';
import { BlogComponent } from './blog/blog.component';
import { AdvancedRoutingModule } from './advanced-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgSelectModule } from '@ng-select/ng-select';
import { DpDatePickerModule } from 'ng2-date-picker';
import { NgxTimerModule } from 'ngx-timer';



@NgModule({
  declarations: [AccordionComponent, CarouselComponent, CollapseComponent, ModalsComponent, TimelineComponent, SweetAlertComponent, RatingsComponent, CountersComponent, SearchComponent, UserlistComponent, BlogComponent],
  imports: [
    CommonModule,
    AdvancedRoutingModule,
    NgbModule,
    SweetAlert2Module,
    FormsModule,
    ReactiveFormsModule,    
    CarouselModule,
    DpDatePickerModule,
    NgSelectModule,
    NgxTimerModule                                                                                
  ]
})
export class AdvancedUiModule { }
