import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Product} from '../../shared/models/product.model';
import {ProductService} from '../../shared/services/product.service';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.scss']
})
export class UnitsComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.productService.getProducts()
      .subscribe((products: Product[]) => {
        this.products = products;
      });
  }

  navToProduct(id: number): void {
    this.router.navigate([`/product/${id}`]);
  }

}
