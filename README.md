# ngx-flatpickr
[![npm version](https://badge.fury.io/js/ngx-flatpickrjs.svg)](https://www.npmjs.com/package/ngx-flatpickrjs)

---

flatpickr for Angular 2+

---

### Exemple:
```HTML
<ngx-flatpickr
  language="french"
  placeholder="Please select a date"
  [options]="options"
  [default]="date"
  (onDateSelect)="setDate($event)"
  (onInit)="initialized($event)"
  >
</ngx-flatpickr>
```

- **language** *(Input)*:  
  *the language of the flatpickr instance*

  All the locales from flatpickr are available, both full country names and codes can be used (Eg: "French" and "fr" both work)

  A full list of all the locales can be seen [in the flatpickr github repository](https://github.com/flatpickr/flatpickr/tree/master/src/l10n)

- **options** *(Input)*:  
  *the placeholder text of the input field*

  All the options available can be seen [on the flatpickr website](https://flatpickr.js.org/options/)

- **onInit** *(Output)*:
  *function launched after the picker is initialized*

  The value returned in `$event` is the flatpickr instance

- **default** *(Input)*:  
  *the default date*

- **onDateSelect** *(Output)*:
  *function launched every time a date is selected*

  The value returned in `$event` is an array containing the selected date(s)

- **placeholder** *(Input)*:  
  *the placeholder text of the input field*

---

**This component also works with FormControl :**

```HTML
<ngx-flatpickr
  placeholder="Please select a date"
  [formControl]="date"
  >
</ngx-flatpickr>
```

```JS
this.date = new FormControl(new Date(), Validators.required)
```
