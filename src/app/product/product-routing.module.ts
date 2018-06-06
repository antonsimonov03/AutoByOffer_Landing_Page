import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { ProductResolver } from '../shared/services/product-resolver.service';

const routes: Routes = [
  { path: ':id', component: ProductComponent, resolve: { product: ProductResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {}
