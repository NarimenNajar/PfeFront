import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Utilisateur} from '../../models/utilisateur';
import {Instruction} from "../../models/Instruction";
import {Fonction} from "../../models/fonction";

@Injectable({
  providedIn: 'root'
})
export class ListeUtilisateursService {
  private baseUrl = 'http://localhost:9080/BackFormationPN-web/rest/users';


  constructor(private http: HttpClient) { }

  afficherUtilisateurs(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(`${this.baseUrl}` + `/all`);
  }

  async afficherUtilisateursAsync() {
    return await this.http.get<Utilisateur[]>(`${this.baseUrl}` + `/all`).toPromise();
  }

  async afficherDetailUtilisateurAsync(idUtilisateur: number) {
    return this.http.get<Utilisateur>(`${this.baseUrl}` + `/detail/` + idUtilisateur).toPromise();
  }

  async deleteUtilisateurAsync(idUtilisateur: number) {
    return await this.http.delete(`${this.baseUrl}` + `/deleteUser/` + idUtilisateur).toPromise();
  }


   afficherInstructions(idUtilisateur: number): Observable<Instruction[]> {
    return this.http.get<Instruction[]>(`${this.baseUrl}` + `/instructions/` + idUtilisateur);
  }

 afficherInstructionsByInstructor(idUtilisateur: number): Observable<Instruction[]> {
    return this.http.get<Instruction[]>(`${this.baseUrl}` + `/instructions/instructor/` + idUtilisateur);
  }

 afficherInstructionsByTrainee(idUtilisateur: number): Observable<Instruction[]> {
    return this.http.get<Instruction[]>(`${this.baseUrl}` + `/instructions/trainee/` + idUtilisateur);
  }

 afficherInstructionsArchive(idUtilisateur: number): Observable<Instruction[]> {
    return this.http.get<Instruction[]>(`${this.baseUrl}` + `/instructions/archive/` + idUtilisateur);
  }
  afficherFonctionsAll(idUtilisateur: number): Observable<Fonction[]> {
    return this.http.get<Fonction[]>(`${this.baseUrl}` + `/fonctions/all/` + idUtilisateur);
  }
  afficherFonctionsArchive(idUtilisateur: number): Observable<Fonction[]> {
    return this.http.get<Fonction[]>(`${this.baseUrl}` + `/fonctions/archive/` + idUtilisateur);
  }
  afficherFonctionsCurrent(idUtilisateur: number): Observable<Fonction[]> {
    return this.http.get<Fonction[]>(`${this.baseUrl}` + `/fonctions/current/` + idUtilisateur);
  }

  afficherMyAlerteEcheanceInstructions(idUtilisateur: number): Observable<Instruction[]> {
    return this.http.get<Instruction[]>(`${this.baseUrl}` + `/instructions/alerteEcheance/` + idUtilisateur);
  }
  afficherAllAlerteEcheanceInstructions(): Observable<Instruction[]> {
    return this.http.get<Instruction[]>(`${this.baseUrl}` + `/instructions/alerteEcheance/all`);
  }

  afficherMyAlerteFinTolerEcheanceInstructions(idUtilisateur: number): Observable<Instruction[]> {
    return this.http.get<Instruction[]>(`${this.baseUrl}` + `/instructions/alerteFinTolerEcheance/` + idUtilisateur);
  }
  afficherAllAlerteFinTolerEcheanceInstructions(): Observable<Instruction[]> {
    return this.http.get<Instruction[]>(`${this.baseUrl}` + `/instructions/alerteFinTolerEcheance/all`);
  }

  async afficherMyAlerteEcheanceInstructionsAsync(idUtilisateur: number) {
    return await this.http.get<Instruction[]>(`${this.baseUrl}` + `/instructions/alerteEcheance/` + idUtilisateur).toPromise();
  }
  async afficherAllAlerteEcheanceInstructionsAsync() {
    return await this.http.get<Instruction[]>(`${this.baseUrl}` + `/instructions/alerteEcheance/all`).toPromise();
  }

  async afficherMyAlerteFinTolerEcheanceInstructionsAsync(idUtilisateur: number) {
    return await this.http.get<Instruction[]>(`${this.baseUrl}` + `/instructions/alerteFinTolerEcheance/` + idUtilisateur).toPromise();
  }
  async afficherAllAlerteFinTolerEcheanceInstructionsAsync() {
    return await this.http.get<Instruction[]>(`${this.baseUrl}` + `/instructions/alerteFinTolerEcheance/all`).toPromise();
  }
}
