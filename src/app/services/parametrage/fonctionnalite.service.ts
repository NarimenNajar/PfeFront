import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Fonctionnalite} from '../../models/fonctionnalite';

@Injectable({
  providedIn: 'root'
})
export class FonctionnaliteService {


  private baseUrl = 'http://localhost:9080/BackFormationPN-web/rest/fonctionnalite';
  constructor(private http: HttpClient) { }

  async afficherFonctionnalitesAsync() {
    return await this.http.get<Fonctionnalite[]>(`${this.baseUrl}` + `/all`).toPromise();
  }
  async ajouterFonctionnaliteAsync(fonctionnalite: Fonctionnalite) {
    return await this.http.post(`${this.baseUrl}` + `/add`, fonctionnalite).toPromise();
  }
  afficherFonctionnalite() {
    return  this.http.get<Fonctionnalite[]>(`${this.baseUrl}` + `/all`);
  }
  async afficherDetailFonctionnaliteAsync(idFonctionnalite: number) {
    return this.http.get<Fonctionnalite>(`${this.baseUrl}` + `/detail/` + idFonctionnalite).toPromise();
  }

  async deleteFonctionnaliteAsync(idFonctionnalite: number) {
    return await this.http.delete(`${this.baseUrl}` + `/delete/` + idFonctionnalite).toPromise();
  }

  async updateFonctionnalite(idFonctionnalite: number, fonctionnalite: Fonctionnalite) {
    return await this.http.put<Fonctionnalite>(`${this.baseUrl}` + `/update/` + idFonctionnalite , fonctionnalite).toPromise();
  }
}
