import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsComponent } from './icons/icons.component';
import { IconsRoutingModule } from './icons-routing.module';



@NgModule({
  declarations: [IconsComponent],
  imports: [
    CommonModule,
    IconsRoutingModule
  ]
})
export class IconsModule { }
