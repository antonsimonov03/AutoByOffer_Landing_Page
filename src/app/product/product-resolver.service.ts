import {Injectable} from '@angular/core';
import {Product} from '../shared/models/product.model';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {ProductService} from '../core/services/product.service';
import {Observable} from 'rxjs';

@Injectable()
export class ProductResolver implements Resolve<Product> {
  constructor(
    private productService: ProductService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<Product> | Promise<Product> | Product {
    return this.productService.getProduct(route.params['id']);
  }
}
