import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NouisliderModule } from 'ng2-nouislider';

import { SearchComponent } from './components/search/search.component';
import { UnitsComponent } from './components/units/units.component';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  imports: [
    CommonModule,
    NouisliderModule,
    AngularFontAwesomeModule,
    NgbModule,
    ReactiveFormsModule,
    NgSelectModule
  ],
  declarations: [
    SearchComponent,
    UnitsComponent
  ],
  exports: [
    CommonModule,
    NouisliderModule,
    AngularFontAwesomeModule,
    SearchComponent,
    UnitsComponent,
    NgbModule,
    ReactiveFormsModule,
    NgSelectModule
  ]
})
export class SharedModule {}
