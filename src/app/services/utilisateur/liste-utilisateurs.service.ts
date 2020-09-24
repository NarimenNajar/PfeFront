import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Utilisateur} from '../../models/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class ListeUtilisateursService {
  private baseUrl = 'http://localhost:9080/BackFormationPN-web/rest/users';


  constructor(private http: HttpClient) { }

  afficherUtilisateurs(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(`${this.baseUrl}` + `/all`);
  }

  async afficherUtilisateursAsync() {
    return await this.http.get<Utilisateur[]>(`${this.baseUrl}` + `/all`).toPromise();
  }

  async afficherDetailUtilisateurAsync(idUtilisateur: number) {
    return this.http.get<Utilisateur>(`${this.baseUrl}` + `/detail/` + idUtilisateur).toPromise();
  }
}
