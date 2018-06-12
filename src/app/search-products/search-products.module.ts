import { NgModule } from '@angular/core';
import { SearchProductsComponent } from './search-products.component';
import { SharedModule } from '../shared/shared.module';
import { SearchProductsRoutingModule } from './search-products-routing.module';

@NgModule({
  imports: [
    SharedModule,
    SearchProductsRoutingModule
  ],
  declarations: [
    SearchProductsComponent
  ]
})
export class SearchProductsModule { }
