import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import {ProductRoutingModule} from './product-routing.module';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {SwiperModule} from 'ngx-swiper-wrapper';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    AngularFontAwesomeModule,
    ProductRoutingModule,
    SwiperModule,
    NgbModule
  ],
  declarations: [
    ProductComponent
  ]

})
export class ProductModule { }
