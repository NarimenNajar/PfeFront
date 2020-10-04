import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TypeSimulateur} from '../../models/typeSimulateur';

@Injectable({
  providedIn: 'root'
})
export class TypeSimulateurService {

  private baseUrl = 'http://localhost:9080/BackFormationPN-web/rest/typeSimulateur';
  constructor(private http: HttpClient) { }

  async afficherTypeSimulateursAsync() {
    return await this.http.get<TypeSimulateur[]>(`${this.baseUrl}` + `/all`).toPromise();
  }
  async ajouterTypeSimulateurAsync(typeSimulateur: TypeSimulateur) {
    return await this.http.post(`${this.baseUrl}` + `/add`, typeSimulateur).toPromise();
  }
  afficherTypeSimulateur() {
    return  this.http.get<TypeSimulateur[]>(`${this.baseUrl}` + `/all`);
  }
  async afficherDetailTypeSimulateurAsync(idTypeSimulateur: number) {
    return this.http.get<TypeSimulateur>(`${this.baseUrl}` + `/detail/` + idTypeSimulateur).toPromise();
  }

  async deleteTypeSimulateurAsync(idTypeSimulateur: number) {
    return await this.http.delete(`${this.baseUrl}` + `/delete/` + idTypeSimulateur).toPromise();
  }

  async updateTypeSimulateur(idTypeSimulateur: number, typeSimulateur: TypeSimulateur) {
    return await this.http.put<TypeSimulateur>(`${this.baseUrl}` + `/update/` + idTypeSimulateur , typeSimulateur).toPromise();
  }
}
