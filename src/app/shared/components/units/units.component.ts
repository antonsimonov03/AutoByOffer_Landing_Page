import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '@shared/models';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.scss']
})
export class UnitsComponent {

  @Input() products: Product[];

  constructor(
    private router: Router
  ) { }


  navToProduct(id: number): void {
    this.router.navigate([`/product/${id}`]);
  }

}
