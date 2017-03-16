import { TestBed, inject } from '@angular/core/testing';

import { RegionProviderService } from './region-provider.service';

describe('RegionProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegionProviderService]
    });
  });

  it('should ...', inject([RegionProviderService], (service: RegionProviderService) => {
    expect(service).toBeTruthy();
  }));
});
