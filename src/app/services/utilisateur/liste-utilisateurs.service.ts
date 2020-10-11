import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Utilisateur} from '../../models/utilisateur';
import {Instruction} from "../../models/Instruction";

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

}
