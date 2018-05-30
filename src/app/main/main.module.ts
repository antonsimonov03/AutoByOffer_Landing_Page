import {NgModule} from '@angular/core';
import {AllUnitsComponent} from './all-units/all-units.component';
import {UnitsComponent} from './units/units.component';
import {CommonModule} from '@angular/common';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {NouisliderModule} from 'ng2-nouislider';
import {MainRoutingModule} from './main-routing.module';
import {MainComponent} from './main.component';
import {SearchComponent} from './home/search/search.component';
import {HomeComponent} from './home/home.component';

@NgModule({
  declarations: [
    AllUnitsComponent,
    HomeComponent,
    UnitsComponent,
    SearchComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    AngularFontAwesomeModule,
    NouisliderModule,
    MainRoutingModule
  ]
})

export class MainModule {

}
