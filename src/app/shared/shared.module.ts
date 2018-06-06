import { NgModule } from '@angular/core';
import { ProductService } from './services/product.service';
import { CommonModule } from '@angular/common';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  imports: [
    CommonModule,
    AngularFontAwesomeModule
  ],
  providers: [
    ProductService
  ],
  exports: [
    CommonModule,
    AngularFontAwesomeModule
  ]
})
export class SharedModule {}
