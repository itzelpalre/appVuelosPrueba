import { TestBed } from '@angular/core/testing';

import { ApiRutasService } from './api-rutas.service';

describe('ApiRutasService', () => {
  let service: ApiRutasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiRutasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
