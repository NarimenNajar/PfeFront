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
  async creerSyllabusAsync(syllabus: Syllabus) {
    return await this.http.post(`${this.baseUrl}` + `/add`, syllabus).toPromise();
  }
}
