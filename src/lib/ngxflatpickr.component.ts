import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  EventEmitter,
  Input,
  Output
} from '@angular/core'
import flatpickrImport from 'flatpickr'

import { CustomLocale } from '../flatpickr/src/types/locale'
import locale from '../flatpickr/src/l10n'

@Component({
  selector: 'ngx-flatpickr',
  template: `
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">
    <input #container [class]="class" [(ngModel)]="value" (ngModelChange)="change($event)">
  `,
  styles: []
})
export class NgxFlatpickrComponent implements OnInit {
  @ViewChild("container") private el: ElementRef
  @Input() private options: object = {}
  @Input() public language: string = ''
  private pickerObj: any

  @Input() public class: string = ''
 
  @Input() public value: string
  @Output() public valueChange = new EventEmitter()

  constructor() {}

  ngOnInit(): void {
    this.pickerObj = flatpickrImport(this.el.nativeElement, {
      ...this.options,
      'locale': this.setLocale(this.language)
    })
  }

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
