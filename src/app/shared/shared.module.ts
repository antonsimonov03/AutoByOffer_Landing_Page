import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NouisliderModule } from 'ng2-nouislider';

import { NgSelectModule } from '@ng-select/ng-select';

import { SearchComponent, UnitsComponent } from '@shared/components';

@NgModule({
  imports: [
    CommonModule,
    NouisliderModule,
    NgSelectModule,
    AngularFontAwesomeModule,
    NgbModule,
    ReactiveFormsModule
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
    NgSelectModule,
    UnitsComponent,
    NgbModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {}
