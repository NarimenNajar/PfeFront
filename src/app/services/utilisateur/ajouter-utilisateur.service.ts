import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActiviteFormation} from '../../models/activiteFormation';
import {Utilisateur} from '../../models/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class AjouterUtilisateurService {
  private baseUrl = 'http://localhost:9080/BackFormationPN-web/rest/users';
  constructor(private http: HttpClient) { }


  async ajouterUtilisateurAsync(utilisateur: Utilisateur) {
    return await this.http.post(`${this.baseUrl}` + `/addUser`, utilisateur).toPromise();
  }
}
