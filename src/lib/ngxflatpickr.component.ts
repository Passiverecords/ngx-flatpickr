import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import flatpickrImport from 'flatpickr';

@Component({
  selector: 'ngx-flatpickr',
  template: `
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">
    <input #container>
  `,
  styles: []
})
export class NgxFlatpickrComponent implements OnInit {

  @ViewChild('container') private el: ElementRef;
  private options: object;
  private pickerObj: object;

  constructor() {
    this.options = {
    };
  }

  ngOnInit() {
    flatpickrImport(this.el.nativeElement, this.options);
  }

}
