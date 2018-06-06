import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainModule } from './main/main.module';
import { ProductModule } from './product/product.module';
import { LoginComponent } from './core/login/login.component';
import { SignupComponent } from './core/signup/signup.component';
import { CompleteProfileComponent } from './core/complete-profile/complete-profile.component';
import { AuthGuard } from './core/services/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: () => MainModule, pathMatch: 'full'},
  { path: 'product', loadChildren: () => ProductModule },
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
