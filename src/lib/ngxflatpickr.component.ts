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
    <style href=""https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css"></style>
    <input #container [class]="class" [(ngModel)]="value" (ngModelChange)="change($event)">
  `,
  style: '',
  encapsulation: ViewEncapsulation.None
})
export class NgxFlatpickrComponent implements OnInit {
  @ViewChild("container") private el: ElementRef
  @Input() private options: object = {}
  private pickerObj: any

  @Input() public class: string

  @Input() public value: string
  @Output() public valueChange = new EventEmitter()

  constructor() {}

  ngOnInit(): void {
    this.pickerObj = flatpickrImport(this.el.nativeElement, this.options)
  }

  change(newValue) {
    this.value = newValue
    this.valueChange.emit(newValue)
  }

  ngOnChanges(changes) {
    if (this.pickerObj != undefined) {
      this.pickerObj.setDate(changes.value.currentValue)
    }
  }

  ngOnDestroy() {
    this.pickerObj.destroy()
  }
}
