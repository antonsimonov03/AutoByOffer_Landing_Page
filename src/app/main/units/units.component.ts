import {Component, OnDestroy, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {Product} from '../../shared/models/product.model';
import {ProductService} from '../../shared/services/product.service';
import {takeWhile} from 'rxjs/operators';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.scss']
})
export class UnitsComponent implements OnInit, OnDestroy {

  products: Product[] = [];
  alive = true;

  constructor(
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.productService.getProducts()
      .pipe(
        takeWhile(() => this.alive)
      )
      .subscribe((products: Product[]) => {
        this.products = products;
      });
  }

  navToProduct(id: number): void {
    this.router.navigate([`/product/${id}`]);
  }

  ngOnDestroy() {
    this.alive = false;
  }

}
