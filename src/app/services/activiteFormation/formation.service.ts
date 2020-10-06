import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActiviteFormation} from '../../models/activiteFormation';
import {Instruction} from '../../models/Instruction';

@Injectable({
  providedIn: 'root'
})
export class FormationService {
  private baseUrl1 = 'http://localhost:9080/BackFormationPN-web/rest/activiteFormation/formation';
  constructor(private http: HttpClient) { }

  async afficherFormationsAsync() {
    return await this.http.get<ActiviteFormation[]>(`${this.baseUrl1}` + `/PNT/all`).toPromise();
  }
  async ajouterFormationAsync(activiteFormation: ActiviteFormation) {
    return await this.http.post(`${this.baseUrl1}` + `/add`, activiteFormation).toPromise();
  }
  async ajouterFormationPNTAsync(activiteFormation: ActiviteFormation) {
    return await this.http.post(`${this.baseUrl1}` + `/PNT/add`, activiteFormation).toPromise();
  }
  async ajouterFormationPNCAsync(activiteFormation: ActiviteFormation) {
    return await this.http.post(`${this.baseUrl1}` + `/PNC/add`, activiteFormation).toPromise();
  }
  afficherFormation() {
    return  this.http.get<ActiviteFormation[]>(`${this.baseUrl1}` + `/all`);
  }
  afficherFormationPNT() {
    return  this.http.get<ActiviteFormation[]>(`${this.baseUrl1}` + `/PNT/all`);
  }
  afficherFormationPNC() {
    return  this.http.get<ActiviteFormation[]>(`${this.baseUrl1}` + `/PNC/all`);
  }
  async afficherDetailFormationAsync(idActiviteFormation: number) {
    return this.http.get<ActiviteFormation>(`${this.baseUrl1}` + `/detail/` + idActiviteFormation).toPromise();
  }

  async deleteFormationAsync(idActiviteFormation: number) {
    return await this.http.delete(`${this.baseUrl1}` + `/delete/` + idActiviteFormation).toPromise();
  }

  async updateFormation(idActiviteFormation: number, activiteFormation: ActiviteFormation) {
    return await this.http.put<ActiviteFormation>(`${this.baseUrl1}` + `/update/` + idActiviteFormation , activiteFormation).toPromise();
  }
  async afficherInstructionByFormation(idActiviteFormation: number) {
    return await this.http.get<Instruction[]>(`${this.baseUrl1}` + `/instructions/` + idActiviteFormation).toPromise();
  }
  async deleteSeanceFormationAsync(idSeanceFormation: number) {
    return await this.http.delete(`${this.baseUrl1}` + `/delete/seanceFormation/` + idSeanceFormation).toPromise();
  }
  async deleteInstructionByActiviteFormationAndUserAsync(idActiviteFormation: number, idUtilisateur: number) {
    return await this.http.delete(`${this.baseUrl1}` + `/delete/instruction/` + idActiviteFormation + `/` + idUtilisateur ).toPromise();
  }

  async ajouterInstructionAsync(instruction: Instruction, idActiviteFormation: number, idUtilisateur: number) {
    return await this.http.post(`${this.baseUrl1}` + `/instruction/add/` + idActiviteFormation + `/` + idUtilisateur , instruction).toPromise();
  }
}
