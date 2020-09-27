import { TestBed } from '@angular/core/testing';

import { SystemeExterneService } from './systeme-externe.service';

describe('SystemeExterneService', () => {
  let service: SystemeExterneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SystemeExterneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
