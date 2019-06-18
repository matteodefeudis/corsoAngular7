import { TestBed } from '@angular/core/testing';

import { ProdottiService } from './prodotti.service';

describe('ProdottiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProdottiService = TestBed.get(ProdottiService);
    expect(service).toBeTruthy();
  });
});
