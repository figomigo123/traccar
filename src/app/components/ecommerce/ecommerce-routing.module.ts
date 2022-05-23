import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CartComponent } from "./cart/cart.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ProductsComponent } from "./products/products.component";

const routes: Routes = [
    {
      path: '',
      children: [
        {
            path: 'cart', component: CartComponent
        },
        {
            path: 'product-details', component: ProductDetailsComponent
        },
        {
            path: 'products', component: ProductsComponent
        },
      ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class  EcommerceRoutingModule { }