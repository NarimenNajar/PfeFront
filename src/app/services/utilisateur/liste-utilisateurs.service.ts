import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Utilisateur} from '../../models/utilisateur';
import {Instruction} from '../../models/Instruction';
import {Fonction} from '../../models/fonction';
import {Event} from '../../models/event';
import {Categorie} from "../../models/categorie";

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

  async updateUtilisateur(idUtilisateur: number, utilisateur: Utilisateur) {
    return await this.http.put<Utilisateur>(`${this.baseUrl}` + `/update/` + idUtilisateur , utilisateur).toPromise();
  }
   afficherInstructions(idUtilisateur: number): Observable<Instruction[]> {
    return this.http.get<Instruction[]>(`${this.baseUrl}` + `/instructions/` + idUtilisateur);
  }

  async afficherInstructionsAsync(idUtilisateur: number) {
    return this.http.get<Instruction[]>(`${this.baseUrl}` + `/instructions/` + idUtilisateur).toPromise();
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

  afficherMyAlerteInstructionsTodayTrainee(idUtilisateur: number): Observable<Instruction[]> {
    return this.http.get<Instruction[]>(`${this.baseUrl}` + `/instructions/today/trainee/` + idUtilisateur);
  }
  async afficherMyAlerteInstructionsTodayTraineeAsync(idUtilisateur: number) {
    return await this.http.get<Instruction[]>(`${this.baseUrl}` + `/instructions/today/trainee/` + idUtilisateur).toPromise();
  }
  afficherMyAlerteInstructionsTodayInstructor(idUtilisateur: number): Observable<Instruction[]> {
    return this.http.get<Instruction[]>(`${this.baseUrl}` + `/instructions/today/instructor/` + idUtilisateur);
  }
  async afficherMyAlerteInstructionsTodayInstructorAsync(idUtilisateur: number) {
    return await this.http.get<Instruction[]>(`${this.baseUrl}` + `/instructions/today/instructor/` + idUtilisateur).toPromise();
  }
  afficherMyAlerteInstructionsToday(idUtilisateur: number): Observable<Instruction[]> {
    return this.http.get<Instruction[]>(`${this.baseUrl}` + `/instructions/today/all/` + idUtilisateur);
  }
  async afficherMyAlerteInstructionsTodayAsync(idUtilisateur: number) {
    return await this.http.get<Instruction[]>(`${this.baseUrl}` + `/instructions/today/all/` + idUtilisateur).toPromise();
  }
  async afficherInstructionBysimulateurAsInstructorAsync(idSimulateur: number) {
    return this.http.get<Instruction>(`${this.baseUrl}` + `/instructions/Bysimulateur/AsInstructor/` + idSimulateur).toPromise();
  }
  async afficherInstructionBysimulateurAsTraineeAsync(idSimulateur: number) {
    return this.http.get<Instruction>(`${this.baseUrl}` + `/instructions/Bysimulateur/AsTrainee/` + idSimulateur).toPromise();
  }

}
