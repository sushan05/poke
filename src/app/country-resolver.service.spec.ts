import { TestBed } from '@angular/core/testing';

import { CountryResolverService } from './country-resolver.service';

describe('CountryResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountryResolverService = TestBed.get(CountryResolverService);
    expect(service).toBeTruthy();
  });
});
