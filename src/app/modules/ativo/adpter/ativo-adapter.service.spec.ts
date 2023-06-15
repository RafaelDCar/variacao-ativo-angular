import { TestBed } from '@angular/core/testing';

import { AtivoAdapterService } from './ativo-adapter.service';

describe('AtivoAdapterService', () => {
  let service: AtivoAdapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtivoAdapterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
