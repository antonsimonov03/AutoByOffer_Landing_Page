import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './main/home/home.component';
import { MenuComponent } from './menu/menu.component';
import { SearchComponent } from './main/home/search/search.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {NouisliderModule} from 'ng2-nouislider';
import { UnitsComponent } from './main/units/units.component';
import { AllUnitsComponent } from './main/all-units/all-units.component';
import { FooterComponent } from './footer/footer.component';
import {AppRoutingModule} from './app-routing.module';
import {MainComponent} from './main/main.component';
import {ProductComponent} from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
