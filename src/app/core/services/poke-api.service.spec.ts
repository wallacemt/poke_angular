import { TestBed } from '@angular/core/testing';

import { PokeApiService } from './poke-api.service';

import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PokeApiService', () => {
  let service: PokeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(PokeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
