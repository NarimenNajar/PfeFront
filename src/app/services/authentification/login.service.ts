import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:9080/BackFormationPN-web/rest/users/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'login', {
      codePN: credentials.codePN,
      cin: credentials.cin
    }, httpOptions);
  }
}
