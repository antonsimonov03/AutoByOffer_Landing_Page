import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '@core/components/login/login.component';
import { SignupComponent } from '@core/components/signup/signup.component';
import { CompleteProfileComponent } from '@core/components/complete-profile/complete-profile.component';
import { AuthGuard } from '@core/guards/auth.guard';
import { MainModule } from './main/main.module';

const routes: Routes = [
  { path: '', loadChildren: () => MainModule, pathMatch: 'full' },
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
