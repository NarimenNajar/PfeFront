import { TestBed } from '@angular/core/testing';

import { NatureFormationService } from './nature-formation.service';

describe('NatureFormationService', () => {
  let service: NatureFormationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NatureFormationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
