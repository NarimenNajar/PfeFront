import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActiviteFormation} from '../../models/activiteFormation';

@Injectable({
  providedIn: 'root'
})
export class SimulateurService {

  private baseUrl1 = 'http://localhost:9080/BackFormationPN-web/rest/activiteFormation/simulateur';
  constructor(private http: HttpClient) { }

  async afficherSimulateursAsync() {
    return await this.http.get<ActiviteFormation[]>(`${this.baseUrl1}` + `/all`).toPromise();
  }
  async ajouterSimulateurAsync(activiteFormation: ActiviteFormation) {
    return await this.http.post(`${this.baseUrl1}` + `/add`, activiteFormation).toPromise();
  }
  afficherSimulateur() {
    return  this.http.get<ActiviteFormation[]>(`${this.baseUrl1}` + `/all`);
  }
  async afficherDetailSimulateurAsync(idActiviteFormation: number) {
    return this.http.get<ActiviteFormation>(`${this.baseUrl1}` + `/detail/` + idActiviteFormation).toPromise();
  }

  async deleteSimulateurAsync(idActiviteFormation: number) {
    return await this.http.delete(`${this.baseUrl1}` + `/delete/` + idActiviteFormation).toPromise();
  }

  async updateSimulateur(idActiviteFormation: number, activiteFormation: ActiviteFormation) {
    return await this.http.put<ActiviteFormation>(`${this.baseUrl1}` + `/update/` + idActiviteFormation , activiteFormation).toPromise();
  }
}
