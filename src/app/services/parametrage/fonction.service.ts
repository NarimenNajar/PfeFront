import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Fonction} from '../../models/fonction';

@Injectable({
  providedIn: 'root'
})
export class FonctionService {

  private baseUrl = 'http://localhost:9080/BackFormationPN-web/rest/fonction';
  constructor(private http: HttpClient) { }

  async ajouterFonctionAsync(fonction: Fonction) {
    return await this.http.post(`${this.baseUrl}` + `/add`, fonction).toPromise();
  }
  async afficherFonctionAsync() {
    return await this.http.get<Fonction[]>(`${this.baseUrl}` + `/all`).toPromise();
  }

  afficherFonction() {
    return  this.http.get<Fonction[]>(`${this.baseUrl}` + `/all`);
  }
  async afficherDetailFonctionAsync(idFonction: number) {
    return this.http.get<Fonction>(`${this.baseUrl}` + `/detail/` + idFonction).toPromise();
  }

  async deleteFonctionAsync(idFonction: number) {
    return await this.http.delete(`${this.baseUrl}` + `/delete/` + idFonction).toPromise();
  }

  async updateFonction(idFonction: number, fonction: Fonction) {
    return await this.http.put<Fonction>(`${this.baseUrl}` + `/update/` + idFonction , fonction).toPromise();
  }
}
