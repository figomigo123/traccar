import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { PricingComponent } from './pricing/pricing.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TodotaskComponent } from './todotask/todotask.component';
import { FaqsComponent } from './faqs/faqs.component';
import { EmptyPageComponent } from './empty-page/empty-page.component';
import { PagesRoutingModule } from './pages-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GalleryModule } from '@ks89/angular-modal-gallery';  
import 'hammerjs';
import 'mousetrap'
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [ProfileComponent, EditProfileComponent, InvoiceComponent, PricingComponent, GalleryComponent, TodotaskComponent, FaqsComponent, EmptyPageComponent],
  imports: [
    CommonModule,PagesRoutingModule,NgbModule,GalleryModule.forRoot(),NgSelectModule
  ]
})
export class PagesModule { }
