import { Component, OnInit } from '@angular/core';
import {Utilisateur} from '../../../models/utilisateur';
import {TypeSimulateurService} from '../../../services/parametrage/type-Simulateur.service';
import {ParametrageEcheanceService} from '../../../services/parametrage/parametrage-echeance.service';
import {Router} from '@angular/router';
import {TypeSimulateur} from '../../../models/typeSimulateur';
import {ParametrageEcheance} from '../../../models/parametrageEcheance';

@Component({
  selector: 'app-ajouter-type-simulateur',
  templateUrl: './ajouter-type-simulateur.component.html',
  styleUrls: ['./ajouter-type-simulateur.component.css']
})
export class AjouterTypeSimulateurComponent implements OnInit {


  constructor(private typeSimulateurService: TypeSimulateurService, private parametrageEcheanceService: ParametrageEcheanceService, private router: Router) { }
  public typeSimulateur: TypeSimulateur = null;
  token: string;
  userConnected: Utilisateur;
  public parametrageEcheances: ParametrageEcheance[] = [];

  ngOnInit(): void {
    this.token = localStorage.getItem('id_token');
    this.userConnected = JSON.parse(localStorage.getItem('user'));
    if (this.userConnected.role.role === 'Administrateur') {



      this.typeSimulateur = new TypeSimulateur();
    } else {
      this.router.navigateByUrl('/authentication/accessDenied');
    }
  }

  async Creer() {
    await this.typeSimulateurService.ajouterTypeSimulateurAsync(this.typeSimulateur).then( e => this.router.navigateByUrl('/simulatorType/all') );
  }

}
