import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService } from '@core/services';

import { PAGE_SIZE } from '@core/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    private router: Router,
    private productService: ProductService
  ) { }

  searchHandler(queryOptions: any): void {
    this.productService.queryOptions = { ...queryOptions, limit: PAGE_SIZE, page: 1 };
    this.router.navigateByUrl('/search');
  }

}
