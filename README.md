# ngx-flatpickr
[![npm version](https://badge.fury.io/js/ngx-flatpickrjs.svg)](https://www.npmjs.com/package/ngx-flatpickrjs)

---

flatpickr for Angular 2+

---

### Exemple:
```XML
<ngx-flatpickr
  language="french"
  placeholder="Please select a date"
  [options]="options"
  [(value)]="date"
  >
</ngx-flatpickr>
```

- **language**:  
  *the language of the flatpickr instance*

  All the locales from flatpickr are available, both full country names and codes can be used (Eg: "French" and "fr" both work)

  A full list of all the locales can be seen [in the flatpickr github repository](https://github.com/flatpickr/flatpickr/tree/master/src/l10n)

- **options**:  
  *the placeholder text of the input field*

  all the options available can be seen [on the flatpickr website](https://flatpickr.js.org/options/)

- **value**:  
  *the selected date*

- **placeholder**:  
  *the placeholder text of the input field*
