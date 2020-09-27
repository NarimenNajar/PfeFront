import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Utilisateur} from '../../models/utilisateur';
import {Syllabus} from '../../models/syllabus';

@Injectable({
  providedIn: 'root'
})
export class SyllabusService {
  private baseUrl = 'http://localhost:9080/BackFormationPN-web/rest/syllabus';
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
}
