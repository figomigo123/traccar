import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetComponent } from './widget/widget.component';
import { WidgetRoutingModule } from './widget-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [WidgetComponent],
  imports: [
    CommonModule,WidgetRoutingModule,
    NgbModule
  ]
})
export class WidgetsModule { }
