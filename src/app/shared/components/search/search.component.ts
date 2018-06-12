import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { takeWhile } from 'rxjs/operators';
import { NouisliderComponent } from 'ng2-nouislider';

import { ProductService } from '@core/services';
import { DEFAULT_DROPDOWN_TEXT } from '@core/constants';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  @Input() opaque;

  @Output() searchSubmit: EventEmitter<any> = new EventEmitter<any>();

  sliderConfig: any;
  searchForm: FormGroup;

  alive = true;

  types: string[] = [];
  makes: string[] = [];
  years: string[] = [
    DEFAULT_DROPDOWN_TEXT.YEAR,
    'Last 5 years',
    'Last 10 years',
    'Last 20 years'
  ];

  @ViewChild(NouisliderComponent) slider: NouisliderComponent;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {

    this.sliderConfig = {
      behaviour: 'drag',
      connect: true,
      range: {
        min: 0,
        max: 100000
      },
      tooltips: [
        {
          to (value: number) {
            return (value >= 1000)
              ? `${(value / 1000).toFixed(1)}k`
              : value.toFixed(0);
          }
        },
        {
          to (value: number) {
            return (value >= 1000)
              ? `${(value / 1000).toFixed(1)}k`
              : value.toFixed(0);
          }
        }
      ]
    };


    this.productService.getTypes()
      .pipe(takeWhile(() => this.alive))
      .subscribe(
        (types: string[]) => {
          this.types = [DEFAULT_DROPDOWN_TEXT.TYPE, ...types];
        }
      );

    this.productService.getMakes()
      .pipe(takeWhile(() => this.alive))
      .subscribe(
        (makes: string[]) => {
          this.makes = [DEFAULT_DROPDOWN_TEXT.MAKE, ...makes];
        }
      );

    this.initForm();
  }

  initForm(): void {
    const options = { ...this.productService.queryOptions };

    this.searchForm = new FormGroup({
      price: new FormControl(
        [
          options.price_min || 0,
          options.price_max || 100000
        ]
      ),
      conditionUsed: new FormControl(Boolean(options.cond_used)),
      conditionNew: new FormControl(Boolean(options.cond_new)),
      type: new FormControl(options.type || DEFAULT_DROPDOWN_TEXT.TYPE),
      make: new FormControl(options.make || DEFAULT_DROPDOWN_TEXT.MAKE),
      year: new FormControl(options.last_years
        ? this.years.find( (option: string) => option.includes(options.last_years))
        : DEFAULT_DROPDOWN_TEXT.YEAR)
    });

    this.slider.ngModel = [
      options.price_min || 0,
      options.price_max || 100000
    ];
  }

  searchParamsEmit(): void {
    const value = this.searchForm.value;

    const searchParams: any = {
      price_min: value.price[0],
      price_max: value.price[1],
      cond_new: Number(value.conditionNew),
      cond_used: Number(value.conditionUsed),
      type: value.type,
      make: value.make
    };

    if (value.type === DEFAULT_DROPDOWN_TEXT.TYPE) {
      delete searchParams.type;
    }

    if (value.make === DEFAULT_DROPDOWN_TEXT.MAKE) {
      delete searchParams.make;
    }

    if (value.year !== DEFAULT_DROPDOWN_TEXT.YEAR) {
      searchParams.last_years = Number(value.year.split(' ')[1]);
    }

    this.searchSubmit.emit(searchParams);
  }

  ngOnDestroy() {
    this.alive = false;
  }

}
