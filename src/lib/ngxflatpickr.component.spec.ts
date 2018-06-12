import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFlatpickrComponent } from './ngxflatpickr.component';

describe('NgxFlatpickrComponent', () => {
  let component: NgxFlatpickrComponent;
  let fixture: ComponentFixture<FlatpickrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxFlatpickrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxFlatpickrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
