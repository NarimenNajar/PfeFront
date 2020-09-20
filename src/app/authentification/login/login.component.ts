import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginService} from '../../services/authentification/login.service';
import {TokenStorageService} from '../../services/authentification/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  constructor(private route: ActivatedRoute, private router: Router, private loginService: LoginService , private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      // this.roles = this.tokenStorage.getUser().roles;
    }
  }
  onSubmit() {
    this.loginService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
       // this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();

        this.home();

      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );

  }

  reloadPage() {


    window.location.reload();

  }
  home() {
    this.router.navigate(['']);
  }

}
