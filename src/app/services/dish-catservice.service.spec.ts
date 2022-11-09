import { TestBed } from '@angular/core/testing';

import { DishCatserviceService } from './dish-catservice.service';

describe('DishCatserviceService', () => {
  let service: DishCatserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DishCatserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
