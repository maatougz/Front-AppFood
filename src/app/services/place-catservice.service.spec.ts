import { TestBed } from '@angular/core/testing';

import { PlaceCatserviceService } from './place-catservice.service';

describe('PlaceCatserviceService', () => {
  let service: PlaceCatserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaceCatserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
