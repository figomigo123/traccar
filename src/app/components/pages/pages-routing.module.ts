import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EditProfileComponent } from "./edit-profile/edit-profile.component";
import { EmptyPageComponent } from "./empty-page/empty-page.component";
import { FaqsComponent } from "./faqs/faqs.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { InvoiceComponent } from "./invoice/invoice.component";
import { PricingComponent } from "./pricing/pricing.component";
import { ProfileComponent } from "./profile/profile.component";
import { TodotaskComponent } from "./todotask/todotask.component";

const routes: Routes = [
    {
      path: '',
      children: [
        {
            path: 'edit-profile', component: EditProfileComponent
        },
        {
          path: 'empty-page', component: EmptyPageComponent
        },
        {
          path: 'faqs', component: FaqsComponent
        },
        {
          path: 'gallery', component: GalleryComponent
        },
        {
          path: 'invoice', component: InvoiceComponent
        },
        {
          path: 'pricing', component: PricingComponent
        },
        {
          path: 'profile', component: ProfileComponent
        },
        {
          path: 'todotask', component: TodotaskComponent
        }
      ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class  PagesRoutingModule { }