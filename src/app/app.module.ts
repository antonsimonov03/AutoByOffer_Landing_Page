import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './home/menu/menu.component';
import { SearchComponent } from './home/search/search.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {NouisliderModule} from 'ng2-nouislider';
import { UnitsComponent } from './units/units.component';
import { AllUnitsComponent } from './all-units/all-units.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    SearchComponent,
    UnitsComponent,
    AllUnitsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    NouisliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
