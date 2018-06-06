import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ErrorPageComponent} from './core/error-page/error-page.component';
import { MainModule } from './main/main.module';
import { ProductModule } from './product/product.module';
import { LoginComponent } from './core/login/login.component';
import { SignupComponent } from './core/signup/signup.component';

const routes: Routes = [
  { path: '', loadChildren: () => MainModule, pathMatch: 'full' },
  { path: 'product', loadChildren: () => ProductModule },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
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
