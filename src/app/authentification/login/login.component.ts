import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginService} from '../../services/authentification/login.service';
import {TokenStorageService} from '../../services/authentification/token-storage.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Utilisateur} from '../../models/utilisateur';
import {FlashMessagesService} from 'angular2-flash-messages';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  token: string;
  user: Utilisateur;
  loginForm: FormGroup;
  email: FormControl;
  password: FormControl;
  constructor(private fb: FormBuilder,
              private loginService: LoginService,
              private router: Router,
              private flashMessages: FlashMessagesService) {
    this.email = this.fb.control('', Validators.compose(
      [
        Validators.required
      ]
    ));
    this.password = this.fb.control('', Validators.compose(
      [
        Validators.required,
        Validators.minLength(8)
      ]
    ));
    this.loginForm = this.fb.group({
      email: this.email ,
      password: this.password
    });
  }

  ngOnInit() {
    this.user = new Utilisateur();
  }
  onLogin() {
    this.user.codePN = this.loginForm.value.email;
    this.user.cin = this.loginForm.value.password;
    this.loginService.loginUser(this.user).subscribe(
      data => {
        // console.log(data);
        this.user = data ;
        console.log(this.user.role.role);
        if (this.user.role.role === 'Administrateur') {
          this.loginService.storeUserData(this.user);
          this.router.navigateByUrl('/category/all');
        } else if (this.user.role.role === 'PNT') {
          this.loginService.storeUserData(this.user);
          this.router.navigateByUrl('/calendar/calendarInstructions/' + this.user.id);
        } else if (this.user.role.role === 'PNC') {
          this.loginService.storeUserData(this.user);
          this.router.navigateByUrl('/calendar/calendarInstructions/' + this.user.id);
        } else if (this.user.role.role === 'Responsable Formation PNT') {
          this.loginService.storeUserData(this.user);
          this.router.navigateByUrl('/charts/chartsResultSimulator');
        } else if (this.user.role.role === 'Responsable Formation PNC') {
          this.loginService.storeUserData(this.user);
          this.router.navigateByUrl('/calendar/calendarInstructions/' + this.user.id);
        } else if (this.user.role.role === 'Agent Administratif Formation PNT') {
          this.loginService.storeUserData(this.user);
          this.router.navigateByUrl('/calendar/calendarInstructions/' + this.user.id);
        } else if (this.user.role.role === 'Agent Administratif Formation PNC') {
          this.loginService.storeUserData(this.user);
          this.router.navigateByUrl('/calendar/calendarInstructions/' + this.user.id);
        } else if (this.user.role.role === 'Instructeur PNC') {
          this.loginService.storeUserData(this.user);
          this.router.navigateByUrl('/calendar/calendarInstructions/' + this.user.id);
        } else if (this.user.role.role === 'Instructeur PNT') {
          this.loginService.storeUserData(this.user);
          this.router.navigateByUrl('/calendar/calendarInstructions/' + this.user.id);
        }

        /*
        if (this.user.role.role === 'Doctor') {
          //   location.reload();
          // this.router.navigate(['/epione-back-office/home-back']);
          // this.router.navigate(['/epione/home']);
          this.loginService.storeAdminData(this.user);
          this.router.navigate(['/epione-back-office/home-back']);
        } else if (this.user.role.role === 'Admin') {
          this.loginService.storeAdminData(this.user);
          this.router.navigate(['/epione-back-office/home-back']);
        } else if (this.user.role.role === 'Patient') {
          this.loginService.storeUserData(this.user);
          location.reload();
          // this.router.navigate(['/epione/home']);
        }
        */
      },
      error1 => {
        this.flashMessages.show('Please check your informations ', {
          cssClass: 'alert-danger',
          timeout: 5000
        });
        console.log(error1);
      }
    );
  }

}
