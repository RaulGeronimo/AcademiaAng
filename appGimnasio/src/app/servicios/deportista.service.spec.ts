import { TestBed } from '@angular/core/testing';

import { DeportistaService } from './deportista.service';

describe('DeportistaService', () => {
  let service: DeportistaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeportistaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
