import { TestBed } from '@angular/core/testing';

import { AllMoviesResolver } from './all-movies.resolver';

describe('AllMoviesResolver', () => {
  let resolver: AllMoviesResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AllMoviesResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
