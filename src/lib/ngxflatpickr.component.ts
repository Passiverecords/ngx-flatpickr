import {
  Component,
  OnInit,
  AfterViewInit,
  OnChanges,
  OnDestroy,
  ViewChild,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
  forwardRef
} from '@angular/core'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'

import flatpickrImport from 'flatpickr'
import { CustomLocale } from 'flatpickr/dist/types/locale'
import { Instance } from 'flatpickr/dist/types/instance'
import { Options } from 'flatpickr/dist/types/options'
import locale from 'flatpickr/dist/l10n'

@Component({
  selector: 'ngx-flatpickr',
  template: `
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">
    <input
      #container
      [class]="class"
      [placeholder]="placeholder"
      (blur)="_onTouched()">
  `,
  styles: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxFlatpickrComponent),
      multi: true
    }
  ]
})
export class NgxFlatpickrComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy, ControlValueAccessor {
  @ViewChild("container") private el: ElementRef
  private instance: Instance

  @Input() private options: Options
  @Input() public language: string
  @Input() public class: string
  @Input() public placeholder: string
  @Output() public onInit: EventEmitter<Instance>

  @Input() public default: Date
  @Output() public onDateSelect: EventEmitter<Date|Date[]>

  public _onChange: (_: Date|Date[]) => void
  public _onTouched: any

  constructor() {
    this.options = {}
    this.language = ''
    this.class = ''
    this.placeholder = ''
    this.onInit = new EventEmitter<Instance>()
    this.onDateSelect = new EventEmitter<Date|Date[]>()
  }

  // <Angular hooks>
  ngOnInit(): void {
    this.instance = flatpickrImport(this.el.nativeElement, {
      ...this.options,
      onChange: (selectedDates: Date[]) => {
        this.onDateSelect.emit(selectedDates)
      },
      'locale': this.setLocale(this.language)
    }) as Instance
  }

  ngAfterViewInit(): void {
    this.onInit.emit(this.instance)
    this.setDate(this.default)
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.instance != undefined && changes.hasOwnProperty('default')) {
      this.setDate(changes['default'].currentValue)
    }
  }

  ngOnDestroy(): void {
    this.instance.destroy()
  }
  // </Angular hooks>

  // <FormControl>
  writeValue(value: Date|Date[]): void {
    this.setDate(value)
  }

  registerOnChange(fn: (_: Date|Date[]) => void): void {
    this._onChange = fn
  }

  registerOnTouched(fn: any): void {
    this._onTouched = fn
  }
  // </FormControl>

  setLocale(language: string): CustomLocale {
    switch(language.toLowerCase()) {
      case 'arabic':
      case 'ar':
        return locale.ar
      case 'austria':
      case 'at':
        return locale.at
      case 'belarusian':
      case 'be':
        return locale.be
      case 'bulgarian':
      case 'bg':
        return locale.bg
      case 'bangla':
      case 'bn':
        return locale.bn
      case 'catalan':
      case 'cat':
        return locale.cat
      case 'czech':
      case 'cs':
        return locale.cs
      case 'welsh':
      case 'cy':
        return locale.cy
      case 'danish':
      case 'da':
        return locale.da
      case 'german':
      case 'de':
        return locale.de
      case 'english':
      case 'en':
        return locale.en
      case 'esperanto':
      case 'eo':
        return locale.eo
      case 'spanish':
      case 'es':
        return locale.es
      case 'estonian':
      case 'et':
        return locale.et
      case 'persian':
      case 'fa':
        return locale.fa
      case 'finnish':
      case 'fi':
        return locale.fi
      case 'french':
      case 'fr':
        return locale.fr
      case 'greek':
      case 'gr':
        return locale.gr
      case 'hebrew':
      case 'he':
        return locale.he
      case 'hindi':
      case 'hi':
        return locale.hi
      case 'croatian':
      case 'hr':
        return locale.hr
      case 'hungarian':
      case 'hu':
        return locale.hu
      case 'indonesian':
      case 'id':
        return locale.id
      case 'italian':
      case 'it':
        return locale.it
      case 'japanese':
      case 'ja':
        return locale.ja
      case 'korean':
      case 'ko':
        return locale.ko
      case 'kazakh':
      case 'kz':
        return locale.kz
      case 'lithuanian':
      case 'lt':
        return locale.lt
      case 'latvian':
      case 'lv':
        return locale.lv
      case 'macedonian':
      case 'mk':
        return locale.mk
      case 'mongolian':
      case 'mn':
        return locale.mn
      case 'malaysian':
      case 'ms':
        return locale.ms
      case 'burmese':
      case 'my':
        return locale.my
      case 'dutch':
      case 'nl':
        return locale.nl
      case 'norwegian':
      case 'no':
        return locale.no
      case 'punjabi':
      case 'pa':
        return locale.pa
      case 'polish':
      case 'pl':
        return locale.pl
      case 'portuguese':
      case 'pt':
        return locale.pt
      case 'romanian':
      case 'ro':
        return locale.ro
      case 'russian':
      case 'ru':
        return locale.ru
      case 'sinhala':
      case 'si':
        return locale.si
      case 'slovak':
      case 'sk':
        return locale.sk
      case 'slovenian':
      case 'sl':
        return locale.sl
      case 'albanian':
      case 'sq':
        return locale.sq
      case 'serbian':
      case 'sr':
        return locale.sr
      case 'swedish':
      case 'sv':
        return locale.sv
      case 'thai':
      case 'th':
        return locale.th
      case 'turkish':
      case 'tr':
        return locale.tr
      case 'ukrainian':
      case 'uk':
        return locale.uk
      case 'vietnamese':
      case 'vn':
        return locale.vn
      case 'mandarin':
      case 'zh':
        return locale.zh
      default:
        return locale.default
    }
  }

  setDate(newdate: Date|Date[]): void {
    this.instance.setDate(newdate, true)
    this.onDateSelect.emit(newdate)
    this._onChange(newdate)
  }
}
