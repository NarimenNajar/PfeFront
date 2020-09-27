import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Syllabus} from '../../models/syllabus';
import {Categorie} from '../../models/categorie';
import {SystemeExterne} from "../../models/systemeExterne";

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  private baseUrl = 'http://localhost:9080/BackFormationPN-web/rest/categorie';
  constructor(private http: HttpClient) { }

  async afficherCategorieAsync() {
    return await this.http.get<Categorie[]>(`${this.baseUrl}` + `/all`).toPromise();
  }

  afficherCategorie() {
    return  this.http.get<Categorie[]>(`${this.baseUrl}` + `/all`);
  }

  async ajouterCategorieAsync(categorie: Categorie) {
    return await this.http.post(`${this.baseUrl}` + `/addCategorie`, categorie).toPromise();
  }

  async afficherDetailCategorieAsync(idCategorie: number) {
    return this.http.get<Categorie>(`${this.baseUrl}` + `/detail/` + idCategorie).toPromise();
  }

  async deleteCategorieAsync(idCategorie: number) {
    return await this.http.delete(`${this.baseUrl}` + `/delete/` + idCategorie).toPromise();
  }

  async updateCategorie(idCategorie: number, categorie: Categorie) {
    return await this.http.put<Categorie>(`${this.baseUrl}` + `/update/` + idCategorie , categorie).toPromise();
  }

}
