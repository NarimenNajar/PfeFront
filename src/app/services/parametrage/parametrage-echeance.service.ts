import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ParametrageEcheance} from '../../models/parametrageEcheance';

@Injectable({
  providedIn: 'root'
})
export class ParametrageEcheanceService {


  private baseUrl = 'http://localhost:9080/BackFormationPN-web/rest/parametrageEcheance';
  constructor(private http: HttpClient) { }

  async afficherParametrageEcheancesAsync() {
    return await this.http.get<ParametrageEcheance[]>(`${this.baseUrl}` + `/all`).toPromise();
  }
  async ajouterParametrageEcheanceAsync(parametrageEcheance: ParametrageEcheance) {
    return await this.http.post(`${this.baseUrl}` + `/add`, parametrageEcheance).toPromise();
  }
  afficherParametrageEcheance() {
    return  this.http.get<ParametrageEcheance[]>(`${this.baseUrl}` + `/all`);
  }
  async afficherDetailParametrageEcheanceAsync(idParametrageEcheance: number) {
    return this.http.get<ParametrageEcheance>(`${this.baseUrl}` + `/detail/` + idParametrageEcheance).toPromise();
  }

  async deleteParametrageEcheanceAsync(idParametrageEcheance: number) {
    return await this.http.delete(`${this.baseUrl}` + `/delete/` + idParametrageEcheance).toPromise();
  }

  async updateParametrageEcheance(idParametrageEcheance: number, parametrageEcheance: ParametrageEcheance) {
    return await this.http.put<ParametrageEcheance>(`${this.baseUrl}` + `/update/` + idParametrageEcheance , parametrageEcheance).toPromise();
  }
}
