import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Utilisateur} from '../../models/utilisateur';

const AUTH_API = 'http://localhost:9080/BackFormationPN-web/rest/users/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private user: Utilisateur;
  private authToken: any;
  private baseUrl = 'http://localhost:9080/BackFormationPN-web/rest';
  private headers = new HttpHeaders().set('content-type', 'application/json');

  constructor(private http: HttpClient) { }
  loginUser(user: Utilisateur): Observable<Utilisateur> {
    return this.http.post<Utilisateur>(this.baseUrl + '/users/auth' , user , {headers: this.headers});
  }
  loggedIn() {
    console.log(localStorage.getItem('id_token') +  ' logged in !');
    console.log(this.checkRole());
    // return tokenNotExpired('id_token');
    if ( localStorage.getItem('id_token') == null) {
      return false;
    } else {
      return true;
    }
  }
  checkRole() {
    if (localStorage.getItem('user') == null) {
      return null;
    } else {
      this.user = JSON.parse(localStorage.getItem('user'));
      return this.user.role.role;
    }

  }
  checkRoleAdmin() {
    if (localStorage.getItem('admin') == null) {
      return null;
    } else {
      this.user = JSON.parse(localStorage.getItem('admin'));
      return this.user.role.role;
    }

  }
  logoutUser() {
     console.log('logged out');
     localStorage.clear();
     return this.http.post<Utilisateur>(this.baseUrl + '/users/logOut' , {headers: this.headers});

  }
  storeUserData(user: Utilisateur) {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('id_token', user.confirmationToken);
  }
 storeDoctorData(doc: Utilisateur) {
    localStorage.setItem('doc', JSON.stringify(doc));
    localStorage.setItem('id_token', doc.confirmationToken);
  }
  storeAdminData(admin: Utilisateur) {
    localStorage.setItem('admin', JSON.stringify(admin));
    localStorage.setItem('id_token', admin.confirmationToken);
  }

}
