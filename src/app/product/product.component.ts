import {Component, ViewChild} from '@angular/core';
import {SwiperComponent, SwiperConfigInterface} from 'ngx-swiper-wrapper';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  config: SwiperConfigInterface;
  index: number;

  @ViewChild(SwiperComponent) swiper;

  constructor(
    private modalService: NgbModal
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
  }

  openModal(content): void {
    this.modalService.open(content, { centered: true });
  }

}
