import { TestBed } from '@angular/core/testing';

import { BrandserviceService } from './brandservice.service';

describe('BrandserviceService', () => {
  let service: BrandserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrandserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
