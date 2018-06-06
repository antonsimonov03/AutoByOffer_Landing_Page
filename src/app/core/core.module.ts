import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  imports: [
    HttpClientModule,
    RouterModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    TextMaskModule,
    NgbModule.forRoot(),
  ],
  declarations: [
    ErrorPageComponent,
    FooterComponent,
    MenuComponent,
    LoginComponent,
    SignupComponent
  ],
  providers: [
    AuthService
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