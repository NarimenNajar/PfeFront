import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActiviteFormation} from '../../models/activiteFormation';
import {Instruction} from "../../models/Instruction";
import {SeanceSimulateur} from "../../models/seanceSimulateur";
import {Note} from "../../models/note";
import {Level} from "../../models/level";

@Injectable({
  providedIn: 'root'
})
export class SimulateurService {

  private baseUrl1 = 'http://localhost:9080/BackFormationPN-web/rest/activiteFormation/simulateur';
  private baseUrl2 = 'http://localhost:9080/BackFormationPN-web/rest/activiteFormation/formation';
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

  async afficherInstructionByFormation(idActiviteFormation: number) {
    return await this.http.get<Instruction[]>(`${this.baseUrl2}` + `/instructions/` + idActiviteFormation).toPromise();
  }

  async ajouterInstructionAsync(instruction: Instruction, idActiviteFormation: number, idUtilisateur: number) {
    return await this.http.post(`${this.baseUrl2}` + `/instruction/add/` + idActiviteFormation + `/` + idUtilisateur , instruction).toPromise();
  }
  async deleteSeanceSimulateurAsync(idSeanceSimulateur: number) {
    return await this.http.delete(`${this.baseUrl1}` + `/delete/seanceSimulateur/` + idSeanceSimulateur).toPromise();
  }
  async deleteInstructionByActiviteFormationAndUserAsync(idActiviteFormation: number, idUtilisateur: number) {
    return await this.http.delete(`${this.baseUrl2}` + `/delete/instruction/` + idActiviteFormation + `/` + idUtilisateur ).toPromise();
  }

  async afficherDetailSeanceSimulateurAsync(idSeanceSimulateur: number) {
    return this.http.get<SeanceSimulateur>(`${this.baseUrl1}` + `/seance/detail/` + idSeanceSimulateur).toPromise();
  }


  async afficherNotesBySeanceSimulateur(idSeanceSimulateur: number) {
    return await this.http.get<Note[]>(`${this.baseUrl1}` + `/notes/` + idSeanceSimulateur).toPromise();
  }
  async afficherLevelsBySeanceSimulateur(idSeanceSimulateur: number) {
    return await this.http.get<Level[]>(`${this.baseUrl1}` + `/levels/` + idSeanceSimulateur).toPromise();
  }
}
