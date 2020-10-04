import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Role} from '../../models/role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private baseUrl = 'http://localhost:9080/BackFormationPN-web/rest/role';
  constructor(private http: HttpClient) { }

  async afficherRolesAsync() {
    return await this.http.get<Role[]>(`${this.baseUrl}` + `/all`).toPromise();
  }
  async ajouterRoleAsync(role: Role) {
    return await this.http.post(`${this.baseUrl}` + `/add`, role).toPromise();
  }
  afficherRole() {
    return  this.http.get<Role[]>(`${this.baseUrl}` + `/all`);
  }
  async afficherDetailRoleAsync(idRole: number) {
    return this.http.get<Role>(`${this.baseUrl}` + `/detail/` + idRole).toPromise();
  }

  async deleteRoleAsync(idRole: number) {
    return await this.http.delete(`${this.baseUrl}` + `/delete/` + idRole).toPromise();
  }

  async updateRole(idRole: number, role: Role) {
    return await this.http.put<Role>(`${this.baseUrl}` + `/update/` + idRole , role).toPromise();
  }
}
