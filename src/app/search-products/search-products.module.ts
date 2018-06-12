import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';

import { SearchProductsRoutingModule } from './search-products-routing.module';

import { SearchProductsComponent } from './search-products.component';

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
