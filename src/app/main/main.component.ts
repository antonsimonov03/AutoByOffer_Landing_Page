import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../shared/services/product.service';
import { Product } from '../shared/models/product.model';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  products: Product[];
  alive = true;
  expanded = false;

  constructor (
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.productService.queryOptions = {
      limit: 6,
      page: 1
    };

    this.getProducts();
  }

  expandUnits() {
    this.productService.queryOptions = {};
    this.getProducts();
    this.expanded = true;
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
    this.productService.queryOptions = {};
    this.alive = false;
  }

}
