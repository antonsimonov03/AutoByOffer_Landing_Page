import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../core/services/product.service';
import { Product } from '../shared/models/product.model';
import { takeWhile } from 'rxjs/operators';
import { PAGE_SIZE } from '@core/constants';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  products: Product[] = [];
  productCount = 0;
  alive = true;
  noMoreProducts = false;

  constructor (
    private productService: ProductService
  ) {
    this.productService.productsAmount$
      .pipe(takeWhile(() => this.alive))
      .subscribe(
        (count: number) => {
          this.productCount = count;
        }
      );
  }

  ngOnInit() {
    this.productService.queryOptions = {
      limit: PAGE_SIZE,
      page: 1
    };

    this.getProducts();
  }

  getMoreProducts() {
    this.productService.queryOptions.limit += PAGE_SIZE;
    this.getProducts();
    if (this.productService.queryOptions.limit >= this.productCount) {
      this.noMoreProducts = true;
    }
  }

  getProducts(): void {
    this.productService.getProducts()
      .pipe(
        takeWhile(() => this.alive)
      )
      .subscribe((products: Product[]) => {
        this.products = products;
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }

}
