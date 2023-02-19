import { TestBed } from '@angular/core/testing';

import { GrupoActividadService } from './grupo-actividad.service';

describe('GrupoActividadService', () => {
  let service: GrupoActividadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrupoActividadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
