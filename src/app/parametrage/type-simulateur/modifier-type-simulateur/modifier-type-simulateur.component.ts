import { Component, OnInit } from '@angular/core';
import {Utilisateur} from "../../../models/utilisateur";
import {TypeSimulateur} from "../../../models/typeSimulateur";
import {TypeSimulateurService} from "../../../services/parametrage/type-Simulateur.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ParametrageEcheanceService} from "../../../services/parametrage/parametrage-echeance.service";
import {ParametrageEcheance} from "../../../models/parametrageEcheance";

@Component({
  selector: 'app-modifier-type-simulateur',
  templateUrl: './modifier-type-simulateur.component.html',
  styleUrls: ['./modifier-type-simulateur.component.css']
})
export class ModifierTypeSimulateurComponent implements OnInit {

  private idTypeSimulateur: number;
  typeSimulateur: TypeSimulateur = new TypeSimulateur();
  constructor(private typeSimulateurService: TypeSimulateurService, private router: Router, private activatedRoute: ActivatedRoute,  private parametrageEcheanceService: ParametrageEcheanceService) { }
  token: string;
  userConnected: Utilisateur;
  public parametrageEcheances: ParametrageEcheance[] = [];

  async ngOnInit() {
    this.token = localStorage.getItem('id_token');
    this.userConnected = JSON.parse(localStorage.getItem('user'));
    this.idTypeSimulateur = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(this.activatedRoute.snapshot.paramMap.get('id'));
    if (this.userConnected.role.role === 'Administrateur') {

      this.typeSimulateur = await this.typeSimulateurService.afficherDetailTypeSimulateurAsync(this.idTypeSimulateur);
    } else {
      this.router.navigateByUrl('/authentication/accessDenied');
    }
  }

  async update(idTypeSimulateur, typeSimulateur) {
    await this.typeSimulateurService.updateTypeSimulateur(idTypeSimulateur, typeSimulateur).then( e => this.router.navigateByUrl('/SimulatorType/all') );
  }

}
