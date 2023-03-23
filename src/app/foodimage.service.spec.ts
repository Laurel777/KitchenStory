import { TestBed } from '@angular/core/testing';

import { FoodimageService } from './foodimage.service';

describe('FoodimageService', () => {
  let service: FoodimageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodimageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
