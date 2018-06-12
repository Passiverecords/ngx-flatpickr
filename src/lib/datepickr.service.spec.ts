import { TestBed, inject } from '@angular/core/testing';

import { FlatpickrService } from './flatpickr.service';

describe('FlatpickrService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlatpickrService]
    });
  });

  it('should be created', inject([FlatpickrService], (service: FlatpickrService) => {
    expect(service).toBeTruthy();
  }));
});
