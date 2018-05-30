import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import {ProductRoutingModule} from './product-routing.module';
import {AngularFontAwesomeModule} from 'angular-font-awesome';

@NgModule({
  imports: [
    CommonModule,
    AngularFontAwesomeModule,
    ProductRoutingModule
  ],
  declarations: [
    ProductComponent
  ]
})
export class ProductModule { }
