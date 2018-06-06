import { NgModule } from '@angular/core';
import { ProductComponent } from './product.component';
import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { ProductResolver } from '../shared/services/product-resolver.service';

@NgModule({
  imports: [
    SharedModule,
    ProductRoutingModule,
    SwiperModule,
    NgbModule
  ],
  providers: [
    ProductResolver
  ],
  declarations: [
    ProductComponent
  ]

})
export class ProductModule { }
