import { TestBed } from '@angular/core/testing';

import { AjouterUtilisateurService } from './ajouter-utilisateur.service';

describe('AjouterUtilisateurService', () => {
  let service: AjouterUtilisateurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjouterUtilisateurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
