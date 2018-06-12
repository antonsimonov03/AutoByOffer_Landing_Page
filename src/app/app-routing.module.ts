import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompleteProfileComponent, LoginComponent, SignupComponent } from '@core/components';
import { AuthGuard } from '@core/guards/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: './main/main.module#MainModule', pathMatch: 'full' },
  { path: 'product', loadChildren: './product/product.module#ProductModule' },
  { path: 'search', loadChildren: './search-products/search-products.module#SearchProductsModule' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'complete-profile', component: CompleteProfileComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
