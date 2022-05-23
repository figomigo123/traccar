import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { EcommerceRoutingModule } from './ecommerce-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [ProductsComponent, ProductDetailsComponent, CartComponent],
  imports: [
    CommonModule,
    EcommerceRoutingModule,
    NgbModule,
    NgSelectModule
  ]
})
export class EcommerceModule { }
