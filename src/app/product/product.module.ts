import { NgModule } from '@angular/core';
import { ProductComponent } from './product.component';
import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { ProductResolver } from './product-resolver.service';

@NgModule({
  imports: [
    SharedModule,
    ProductRoutingModule,
    SwiperModule
  ],
  providers: [
    ProductResolver
  ],
  declarations: [
    ProductComponent
  ]

})
export class ProductModule { }
