import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { TextMaskModule } from 'angular2-text-mask';

import { ErrorPageComponent } from './components/error-page/error-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { CompleteProfileComponent } from './components/complete-profile/complete-profile.component';

import { AuthGuard } from '@core/guards/auth.guard';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    TextMaskModule,
    NgbModule.forRoot()
  ],
  declarations: [
    ErrorPageComponent,
    FooterComponent,
    MenuComponent,
    LoginComponent,
    SignupComponent,
    CompleteProfileComponent
  ],
  providers: [
    AuthGuard
  ],
  exports: [
    HttpClientModule,
    RouterModule,
    NgbModule,
    AngularFontAwesomeModule,
    TextMaskModule,
    ReactiveFormsModule,
    ErrorPageComponent,
    FooterComponent,
    MenuComponent
  ]
})
export class CoreModule {}
