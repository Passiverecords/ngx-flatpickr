import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation
} from '@angular/core'
import flatpickrImport from 'flatpickr'

@Component({
  selector: 'ngx-flatpickr',
  template: `
    <input #container [class]="class" [ngModel]="value" (ngModelChange)="change($event)">
  `,
  styleUrls: [
    "https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css"
  ],
  encapsulation: ViewEncapsulation.None
})
export class NgxFlatpickrComponent implements OnInit {

  @ViewChild('container') private el: ElementRef
  @Input() private options: object = {}

  @Input() public class: string

  @Input() public value: string
  @Output() public valueChange = new EventEmitter()

  constructor() {
  }

  ngOnInit(): void {
    flatpickrImport(this.el.nativeElement, this.options)
  }

  change(newValue) {
    this.value = newValue
    this.valueChange.emit(newValue)
  }

}
