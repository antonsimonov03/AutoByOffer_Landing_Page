import { Component, OnDestroy, OnInit } from '@angular/core';

import { takeWhile } from 'rxjs/operators';

import { ProductService } from '@core/services/product.service';
import { DEFAULT_PRODUCT_QUERY, PAGE_SIZE } from '@core/constants';

import { Product } from '@shared/models';

@Component({
  selector: 'app-search-products',
  templateUrl: './search-products.component.html',
  styleUrls: ['./search-products.component.scss']
})
export class SearchProductsComponent implements OnInit, OnDestroy {

  products: Product[] = [];
  productCount: number;
  alive = true;

  pageSize = PAGE_SIZE;

  constructor(
    private productsService: ProductService
  ) {

    this.productsService.productsAmount$
      .pipe(takeWhile(() => this.alive))
      .subscribe(
        (count: number) => {
          this.productCount = count;
        }
      );
  }

  ngOnInit() {
    this.productsService.queryOptions = {
      ...this.productsService.queryOptions,
      limit: PAGE_SIZE,
      page: 1
    };

    this.getProducts();
  }

  pageChanged(page: number): void {
    this.productsService.queryOptions = {
      ...this.productsService.queryOptions,
      page
    };

    this.getProducts();
  }

  getProducts(): void {
    this.productsService.getProducts()
      .pipe(takeWhile(() => this.alive))
      .subscribe(
        (products: Product[]) => {
          this.products = products;
        }
      );
  }

  searchHandler(queryOptions: any): void {
    this.productsService.queryOptions = {
      ...DEFAULT_PRODUCT_QUERY,
      ...queryOptions,
      page: 1
    };

    this.getProducts();
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
