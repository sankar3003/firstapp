import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListRoutingModule } from './product-list-routing.module';
import { ProductListComponent } from './product-list.component';
import { ProductAlertComponent } from '../product-alert/product-alert.component';


@NgModule({
  declarations: [ProductListComponent,
  ProductAlertComponent,
  ],
  imports: [
    CommonModule,
    ProductListRoutingModule,

  ]
})
export class ProductListModule { }
