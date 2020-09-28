import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Utilisateur} from '../../models/utilisateur';
import {Syllabus} from '../../models/syllabus';

@Injectable({
  providedIn: 'root'
})
export class SyllabusService {
  private baseUrl = 'http://localhost:9080/BackFormationPN-web/rest/syllabus';
  private baseUrl2 = 'http://localhost:9080/BackFormationPN-web/rest/exercice';
  private baseUrl3 = 'http://localhost:9080/BackFormationPN-web/rest/competence';
  private baseUrl4 = 'http://localhost:9080/BackFormationPN-web/rest/partie';
  private baseUrl5 = 'http://localhost:9080/BackFormationPN-web/rest/description';
  private baseUrl6 = 'http://localhost:9080/BackFormationPN-web/rest/detail';
  private baseUrl7 = 'http://localhost:9080/BackFormationPN-web/rest/tache';

  public listeSyllabus: Syllabus[] = [];
  constructor(private http: HttpClient) { }

  async afficherSyllabusAsync() {
    return await this.http.get<Syllabus[]>(`${this.baseUrl}` + `/all`).toPromise();
  }

   afficherSyllabus() {
    return  this.http.get<Syllabus[]>(`${this.baseUrl}` + `/all`);
  }

  async creerSyllabusAsync(syllabus: Syllabus) {
    syllabus.dateAjout = new Date();
    return await this.http.post(`${this.baseUrl}` + `/add`, syllabus).toPromise();
  }

  async afficherDetailSyllabusAsync(idSyllabus: number) {
    return this.http.get<Syllabus>(`${this.baseUrl}` + `/detail/` + idSyllabus).toPromise();
  }

  async deleteSyllabusAsync(idSyllabus: number) {
    return await this.http.delete(`${this.baseUrl}` + `/delete/` + idSyllabus).toPromise();
  }

   async updateSyllabus(idSyllabus: number, syllabus: Syllabus) {
    return await this.http.put<Syllabus>(`${this.baseUrl}` + `/update/` + idSyllabus , syllabus).toPromise();  }

  async deleteExerciceAsync(idExercice: number) {
    return await this.http.delete(`${this.baseUrl2}` + `/delete/` + idExercice).toPromise();
  }
  async deleteDescriptionAsync(idDescription: number) {
    return await this.http.delete(`${this.baseUrl5}` + `/delete/` + idDescription).toPromise();
  }
  async deleteCompetenceAsync(idCompetence: number) {
    return await this.http.delete(`${this.baseUrl3}` + `/delete/` + idCompetence).toPromise();
  }
  async deletePartieAsync(idPartie: number) {
    return await this.http.delete(`${this.baseUrl4}` + `/delete/` + idPartie).toPromise();
  }
  async deleteDetailAsync(idDetail: number) {
    return await this.http.delete(`${this.baseUrl6}` + `/delete/` + idDetail).toPromise();
  }
  async deleteTacheAsync(idTache: number) {
    return await this.http.delete(`${this.baseUrl7}` + `/delete/` + idTache).toPromise();
  }
}
