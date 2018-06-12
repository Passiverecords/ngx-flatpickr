import { Component, OnInit } from '@angular/core';

import flatpickr from "flatpickr";

@Component({
  selector: 'ngx-flatpickr',
  template: `
    <div #flatpickr></div>
  `,
  styles: []
})
export class FlatpickrComponent implements OnInit {

  @ViewChild('flatpickr') private el: ElementRef
  private options: object;

  constructor() {
    this.options = {
    };
  }

  ngOnInit() {
    flatpickr(this.el.nativeElement, options);
  }

}
