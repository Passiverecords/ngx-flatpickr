import { TestBed, inject } from '@angular/core/testing';

import { NgxFlatpickrService } from './ngxflatpickr.service';

describe('NgxFlatpickrService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxFlatpickrService]
    });
  });

  it('should be created', inject([NgxFlatpickrService], (service: NgxFlatpickrService) => {
    expect(service).toBeTruthy();
  }));
});
