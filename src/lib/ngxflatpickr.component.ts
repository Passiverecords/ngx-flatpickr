import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import flatpickrImport from 'flatpickr';

@Component({
  selector: 'ngx-flatpickr',
  template: `
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">
    <input #container [(ngModel)]="value">
  `,
  styles: []
})
export class NgxFlatpickrComponent implements OnInit {

  @ViewChild('container') private el: ElementRef;
  @Input() private options: object = {};
  private pickerObj: object;
  private value: string;

  constructor() {
  }

  ngOnInit(): void {
    flatpickrImport(this.el.nativeElement, this.options);
  }

  getValue(): string {
    return this.value;
  }

}
