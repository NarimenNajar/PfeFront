import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from './services/authentification/login.service';
import {Utilisateur} from './models/utilisateur';
import {SimulateurService} from './services/activiteFormation/simulateur.service';
import {Role} from './models/role';
import {Reclamation} from './models/reclamation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NouvelairFront';

  token: string;
  userConnected: Utilisateur;
  public reclamations: Reclamation[] = [];
  nombreReclamations: number;


  constructor(public router: Router, public loginService: LoginService, public simulateurService: SimulateurService) {
    console.log('app comp');
    this.token = localStorage.getItem('id_token');
    this.userConnected = JSON.parse(localStorage.getItem('user'));

    this.simulateurService.afficherReclamationsNonTraiteeAsync().then( reclamation => {
      this.reclamations = reclamation;
      this.nombreReclamations = this.reclamations.length;
      console.log(this.nombreReclamations); });
  }
  onLogout() {
    this.loginService.logoutUser();
    this.router.navigateByUrl('/authentication/signin').then((e) =>  window.location.reload() );

  }
  showProfile(idUtilisateur: number) {
    this.router.navigateByUrl('/user/show/' + idUtilisateur);
  }
  showFonctions(idUtilisateur: number) {
    this.router.navigateByUrl('/user/function/all/' + idUtilisateur);
  }
  showFonctionsArchive(idUtilisateur: number) {
    this.router.navigateByUrl('/user/function/archive/' + idUtilisateur);
  }

  showFonctionsCurrent(idUtilisateur: number) {
    this.router.navigateByUrl('/user/function/current/' + idUtilisateur);
  }
  showInstructionsInstructor(idUtilisateur: number) {
    this.router.navigateByUrl('/user/instruction/instructor/' + idUtilisateur);
  }

  showInstructionsTrainee(idUtilisateur: number) {
    this.router.navigateByUrl('/user/instruction/trainee/' + idUtilisateur);
  }

  showInstructionsArchive(idUtilisateur: number) {
    this.router.navigateByUrl('/user/instruction/archive/' + idUtilisateur);
  }
  showReclamationsNonTraitee() {
    this.router.navigateByUrl('/claim/notProcessed');
  }
}
