import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from './services/authentification/login.service';
import {Utilisateur} from './models/utilisateur';
import {SimulateurService} from './services/activiteFormation/simulateur.service';
import {Role} from './models/role';
import {Reclamation} from './models/reclamation';
import {ListeUtilisateursService} from './services/utilisateur/liste-utilisateurs.service';
import {Instruction} from './models/Instruction';

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

  public instructionsAllFinToler: Instruction[] = [];
  nombreinstructionsAllFinToler: number;
  public instructionsMyFinToler: Instruction[] = [];
  nombreinstructionsMyFinToler: number;
  public instructionsAllEch: Instruction[] = [];
  nombreinstructionsAllEch: number;
  public instructionsMyEch: Instruction[] = [];
  nombreinstructionsMyEch: number;
  public instructionsMyTodayAll: Instruction[] = [];
  nombreinstructionsMyTodayAll: number;
  public instructionsMyTodayTrainee: Instruction[] = [];
  nombreinstructionsMyTodayTrainee: number;
  public instructionsMyTodayInstructor: Instruction[] = [];
  nombreinstructionsMyTodayInstructor: number;


  constructor(public router: Router, public loginService: LoginService, public simulateurService: SimulateurService, public listeUtilisateursService: ListeUtilisateursService) {
    console.log('app comp');
    this.token = localStorage.getItem('id_token');
    this.userConnected = JSON.parse(localStorage.getItem('user'));

    this.simulateurService.afficherReclamationsNonTraiteeAsync().then( reclamation => {
      this.reclamations = reclamation;
      this.nombreReclamations = this.reclamations.length;
      });

    this.listeUtilisateursService.afficherAllAlerteFinTolerEcheanceInstructionsAsync().then( instruction => {
      this.instructionsAllFinToler = instruction;
      this.nombreinstructionsAllFinToler = this.instructionsAllFinToler.length;
     });

    this.listeUtilisateursService.afficherAllAlerteEcheanceInstructionsAsync().then( instruction => {
      this.instructionsAllEch = instruction;
      this.nombreinstructionsAllEch = this.instructionsAllEch.length;
       });
    if (this.userConnected !== null) {
    this.listeUtilisateursService.afficherMyAlerteFinTolerEcheanceInstructionsAsync(this.userConnected.id).then( instruction => {
      this.instructionsMyFinToler = instruction;
      this.nombreinstructionsMyFinToler = this.instructionsMyFinToler.length;
      });


    this.listeUtilisateursService.afficherMyAlerteEcheanceInstructionsAsync(this.userConnected.id).then( instruction => {
      this.instructionsMyEch = instruction;
      this.nombreinstructionsMyEch = this.instructionsMyEch.length;
      console.log(this.nombreinstructionsMyEch); });

    this.listeUtilisateursService.afficherMyAlerteInstructionsTodayAsync(this.userConnected.id).then( instruction => {
      this.instructionsMyTodayAll = instruction;
      this.nombreinstructionsMyTodayAll = this.instructionsMyTodayAll.length;
      console.log(this.nombreinstructionsMyTodayAll); });

    }
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
  showAllAlertEchInstructions() {
    this.router.navigateByUrl('/user/instruction/alertDeadline/all');
  }
  showAllAlertEndTolerEchInstructions() {
    this.router.navigateByUrl('/user/instruction/alertDeadlineEndToler/all');
  }
  showMyAlertEchInstructions(idUtilisateur: number) {
    this.router.navigateByUrl('/user/instruction/alertDeadline/my/' + idUtilisateur);
  }
  showMyAlertEndTolerEchInstructions(idUtilisateur: number) {
    this.router.navigateByUrl('/user/instruction/alertDeadlineEndToler/my/' + idUtilisateur);
  }

  showTodayInstructionsAll(idUtilisateur: number) {
    this.router.navigateByUrl('/user/instruction/today/all/' + idUtilisateur);
  }
  goToCalendar(idUtilisateur: number) {
    this.router.navigateByUrl('/calendar/calendarInstructions/' + idUtilisateur);
  }
}
