import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TypeFonction} from '../../models/typeFonction';

@Injectable({
  providedIn: 'root'
})
export class TypeFonctionService {

  private baseUrl = 'http://localhost:9080/BackFormationPN-web/rest/typeFonction';
  constructor(private http: HttpClient) { }

  async afficherTypeFonctionsAsync() {
    return await this.http.get<TypeFonction[]>(`${this.baseUrl}` + `/all`).toPromise();
  }
  async ajouterTypeFonctionAsync(typeFonction: TypeFonction) {
    return await this.http.post(`${this.baseUrl}` + `/add`, typeFonction).toPromise();
  }
  afficherTypeFonction() {
    return  this.http.get<TypeFonction[]>(`${this.baseUrl}` + `/all`);
  }
  async afficherDetailTypeFonctionAsync(idTypeFonction: number) {
    return this.http.get<TypeFonction>(`${this.baseUrl}` + `/detail/` + idTypeFonction).toPromise();
  }

  async deleteTypeFonctionAsync(idTypeFonction: number) {
    return await this.http.delete(`${this.baseUrl}` + `/delete/` + idTypeFonction).toPromise();
  }

  async updateTypeFonction(idTypeFonction: number, typeFonction: TypeFonction) {
    return await this.http.put<TypeFonction>(`${this.baseUrl}` + `/update/` + idTypeFonction , typeFonction).toPromise();
  }
}
