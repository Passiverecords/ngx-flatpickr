import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import flatpickrImport from 'flatpickr';

@Component({
  selector: 'ngx-flatpickr',
  template: `
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">
    <input #container [ngModel]="value" (ngModelChange)="change($event)">
  `,
  styles: []
})
export class NgxFlatpickrComponent implements OnInit {

  @ViewChild('container') private el: ElementRef;
  @Input() private options: object = {};
  private pickerObj: object;

  @Input() public value: string;
  @Output() public valueChange = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
    flatpickrImport(this.el.nativeElement, this.options);
  }

  change(newValue) {
    this.value = newValue;
    this.valueChange.emit(newValue);
  }

}
