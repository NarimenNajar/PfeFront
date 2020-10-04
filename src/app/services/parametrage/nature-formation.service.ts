import { Injectable } from '@angular/core';
import {NatureFormation} from '../../models/natureFormation';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NatureFormationService {

  private baseUrl = 'http://localhost:9080/BackFormationPN-web/rest/natureFormation';
  constructor(private http: HttpClient) { }

  async afficherNatureFormationsAsync() {
    return await this.http.get<NatureFormation[]>(`${this.baseUrl}` + `/all`).toPromise();
  }
  async ajouterNatureFormationAsync(natureFormation: NatureFormation) {
    return await this.http.post(`${this.baseUrl}` + `/add`, natureFormation).toPromise();
  }
  afficherNatureFormation() {
    return  this.http.get<NatureFormation[]>(`${this.baseUrl}` + `/all`);
  }
  async afficherDetailNatureFormationAsync(idNatureFormation: number) {
    return this.http.get<NatureFormation>(`${this.baseUrl}` + `/detail/` + idNatureFormation).toPromise();
  }

  async deleteNatureFormationAsync(idNatureFormation: number) {
    return await this.http.delete(`${this.baseUrl}` + `/delete/` + idNatureFormation).toPromise();
  }

  async updateNatureFormation(idNatureFormation: number, natureFormation: NatureFormation) {
    return await this.http.put<NatureFormation>(`${this.baseUrl}` + `/update/` + idNatureFormation , natureFormation).toPromise();
  }
}
