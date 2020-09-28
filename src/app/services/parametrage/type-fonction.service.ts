import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Categorie} from '../../models/categorie';
import {TypeFonction} from '../../models/typeFonction';

@Injectable({
  providedIn: 'root'
})
export class TypeFonctionService {

  private baseUrl = 'http://localhost:9080/BackFormationPN-web/rest/typeFonction';
  constructor(private http: HttpClient) { }

  async afficherTypeFonctionsAsync() {
    return await this.http.get<TypeFonction[]>(`${this.baseUrl}` + `/all`).toPromise();
  }
}
