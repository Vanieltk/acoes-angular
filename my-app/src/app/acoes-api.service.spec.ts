import { TestBed } from '@angular/core/testing';

import { AcoesApiService } from './acoes-api.service';

describe('AcoesApiService', () => {
  let service: AcoesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcoesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
