import {NgModule} from '@angular/core';
import {AllUnitsComponent} from './all-units/all-units.component';
import {UnitsComponent} from './units/units.component';
import {NouisliderModule} from 'ng2-nouislider';
import {MainRoutingModule} from './main-routing.module';
import {MainComponent} from './main.component';
import {SearchComponent} from './home/search/search.component';
import {HomeComponent} from './home/home.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AllUnitsComponent,
    HomeComponent,
    UnitsComponent,
    SearchComponent,
    MainComponent
  ],
  imports: [
    SharedModule,
    NouisliderModule,
    MainRoutingModule
  ],
  providers: []
})

export class MainModule {

}
