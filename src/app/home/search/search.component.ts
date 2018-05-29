import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  range = [35, 80];
  sliderConfig: any;

  constructor() { }

  ngOnInit() {
    this.sliderConfig = {
      behaviour: 'drag',
      connect: true,
      range: {
        min: 0,
        max: 100
      },
      tooltips: [
        {
          to (value: number) {
            return value.toFixed(0);
          }
        },
        {
          to (value: number) {
            return value.toFixed(0);
          }
        }
      ]
    };
  }

}
