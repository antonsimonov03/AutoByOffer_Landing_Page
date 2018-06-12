import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { takeWhile } from 'rxjs/operators';
import { SwiperComponent, SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Product } from '@shared/models';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {

  product: Product;
  config: SwiperConfigInterface;
  index: number;

  alive = true;

  @ViewChild(SwiperComponent) swiper;

  constructor(
    private modalService: NgbModal,
    private route: ActivatedRoute
  ) {

    this.config = {
      height: 600,
      width: 1630,
      spaceBetween: 30,
      direction: 'horizontal',
      slidesPerView: 2,
      centeredSlides: true,
      autoHeight: true
    };

    this.index = 2;

    this.route.data
      .pipe(takeWhile(() => this.alive))
      .subscribe( (data) => {
        this.product = data.product;
      });
  }

  ngOnInit() {}

  openModal(content): void {
    this.modalService.open(content, { centered: true });
  }

  ngOnDestroy() {
    this.alive = false;
  }

}
