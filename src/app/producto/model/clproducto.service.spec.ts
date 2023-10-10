import { TestBed } from '@angular/core/testing';

import { ClproductoService } from './clproducto.service';

describe('ClproductoService', () => {
  let service: ClproductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClproductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
