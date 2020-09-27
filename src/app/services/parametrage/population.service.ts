import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Categorie} from '../../models/categorie';
import {Population} from '../../models/population';
import {SystemeExterne} from "../../models/systemeExterne";

@Injectable({
  providedIn: 'root'
})
export class PopulationService {

  private baseUrl = 'http://localhost:9080/BackFormationPN-web/rest/population';
  constructor(private http: HttpClient) { }


  async afficherPopulationAsync() {
    return await this.http.get<Population[]>(`${this.baseUrl}` + `/all`).toPromise();
  }

  afficherPopulation() {
    return  this.http.get<Population[]>(`${this.baseUrl}` + `/all`);
  }

  async ajouterPopulationAsync(population: Population) {
    return await this.http.post(`${this.baseUrl}` + `/add`, population).toPromise();
  }

  async afficherDetailPopulationAsync(idPopulation: number) {
    return this.http.get<Population>(`${this.baseUrl}` + `/detail/` + idPopulation).toPromise();
  }

  async deletePopulationAsync(idPopulation: number) {
    return await this.http.delete(`${this.baseUrl}` + `/delete/` + idPopulation).toPromise();
  }


  async updatePopulation(idPopulation: number, population: Population) {
    return await this.http.put<Population>(`${this.baseUrl}` + `/update/` + idPopulation , population).toPromise();
  }


}
