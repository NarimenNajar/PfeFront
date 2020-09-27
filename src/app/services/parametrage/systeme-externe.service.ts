import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SystemeExterne} from '../../models/systemeExterne';
import {Syllabus} from "../../models/syllabus";

@Injectable({
  providedIn: 'root'
})
export class SystemeExterneService {

  private baseUrl = 'http://localhost:9080/BackFormationPN-web/rest/systemeExterne';
  constructor(private http: HttpClient) { }

  async afficherSystemeExterneAsync() {
    return await this.http.get<SystemeExterne[]>(`${this.baseUrl}` + `/all`).toPromise();
  }

  afficherSystemeExterne() {
    return  this.http.get<SystemeExterne[]>(`${this.baseUrl}` + `/all`);
  }

  async ajouterSystemeExterneAsync(systemeExterne: SystemeExterne) {
    return await this.http.post(`${this.baseUrl}` + `/add`, systemeExterne).toPromise();
  }

  async afficherDetailSystemeExterneAsync(idSystemeExterne: number) {
    return this.http.get<SystemeExterne>(`${this.baseUrl}` + `/detail/` + idSystemeExterne).toPromise();
  }

  async deleteSystemeExterneAsync(idSystemeExterne: number) {
    return await this.http.delete(`${this.baseUrl}` + `/delete/` + idSystemeExterne).toPromise();
  }

 async updateSystemeExterne(idSystemeExterne: number, systemeExterne: SystemeExterne) {
    return await this.http.put<SystemeExterne>(`${this.baseUrl}` + `/update/` + idSystemeExterne , systemeExterne).toPromise();
  }

}
