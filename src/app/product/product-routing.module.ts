import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { ProductResolver } from './product-resolver.service';
import { AuthGuard } from '../core/services/auth.guard';

const routes: Routes = [
  { path: ':id', component: ProductComponent, resolve: { product: ProductResolver }, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {}
