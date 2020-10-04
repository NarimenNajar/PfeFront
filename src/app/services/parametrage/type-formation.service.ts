import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TypeFormation} from '../../models/typeFormation';

@Injectable({
  providedIn: 'root'
})
export class TypeFormationService {

  private baseUrl = 'http://localhost:9080/BackFormationPN-web/rest/typeFormation';
  constructor(private http: HttpClient) { }

  async afficherTypeFormationsAsync() {
    return await this.http.get<TypeFormation[]>(`${this.baseUrl}` + `/all`).toPromise();
  }
  async ajouterTypeFormationAsync(typeFormation: TypeFormation) {
    return await this.http.post(`${this.baseUrl}` + `/add`, typeFormation).toPromise();
  }
  afficherTypeFormation() {
    return  this.http.get<TypeFormation[]>(`${this.baseUrl}` + `/all`);
  }
  async afficherDetailTypeFormationAsync(idTypeFormation: number) {
    return this.http.get<TypeFormation>(`${this.baseUrl}` + `/detail/` + idTypeFormation).toPromise();
  }

  async deleteTypeFormationAsync(idTypeFormation: number) {
    return await this.http.delete(`${this.baseUrl}` + `/delete/` + idTypeFormation).toPromise();
  }

  async updateTypeFormation(idTypeFormation: number, typeFormation: TypeFormation) {
    return await this.http.put<TypeFormation>(`${this.baseUrl}` + `/update/` + idTypeFormation , typeFormation).toPromise();
  }
}
