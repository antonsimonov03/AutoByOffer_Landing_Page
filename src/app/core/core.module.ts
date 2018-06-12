import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { TextMaskModule } from 'angular2-text-mask';

import { AuthGuard } from '@core/guards/auth.guard';

import {
  CompleteProfileComponent,
  ErrorPageComponent,
  FooterComponent,
  LoginComponent,
  MenuComponent,
  SignupComponent
} from '@core/components';

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
