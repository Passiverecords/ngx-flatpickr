import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { NgxFlatpickrComponent } from './ngxflatpickr.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [NgxFlatpickrComponent],
  exports: [NgxFlatpickrComponent]
})
export class NgxFlatpickrModule { }
