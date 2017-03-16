import { TestBed, inject } from '@angular/core/testing';

import { OrderProviderService } from './order-provider.service';

describe('OrderProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderProviderService]
    });
  });

  it('should ...', inject([OrderProviderService], (service: OrderProviderService) => {
    expect(service).toBeTruthy();
  }));
});
