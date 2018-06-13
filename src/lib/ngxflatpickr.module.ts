import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { NgxFlatpickrComponent } from './ngxflatpickr.component';

@NgModule({
  imports: [
    FormsModule
  ],
  declarations: [NgxFlatpickrComponent],
  exports: [NgxFlatpickrComponent]
})
export class NgxFlatpickrModule { }
