import { TestBed } from '@angular/core/testing';

import { TypeSimulateurService } from './type-simulateur.service';

describe('TypeSimulateurService', () => {
  let service: TypeSimulateurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeSimulateurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
