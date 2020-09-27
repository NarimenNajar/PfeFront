import { TestBed } from '@angular/core/testing';

import { ParametrageEcheanceService } from './parametrage-echeance.service';

describe('ParametrageEcheanceService', () => {
  let service: ParametrageEcheanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParametrageEcheanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
