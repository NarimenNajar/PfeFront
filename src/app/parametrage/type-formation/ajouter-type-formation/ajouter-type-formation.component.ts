import { Component, OnInit } from '@angular/core';
import {Utilisateur} from "../../../models/utilisateur";
import {CategorieService} from "../../../services/parametrage/categorie.service";
import {Router} from "@angular/router";
import {Categorie} from "../../../models/categorie";
import {TypeFormationService} from "../../../services/parametrage/type-formation.service";
import {TypeFormation} from "../../../models/typeFormation";
import {ParametrageEcheance} from "../../../models/parametrageEcheance";
import {ParametrageEcheanceService} from "../../../services/parametrage/parametrage-echeance.service";
import {Role} from "../../../models/role";

@Component({
  selector: 'app-ajouter-type-formation',
  templateUrl: './ajouter-type-formation.component.html',
  styleUrls: ['./ajouter-type-formation.component.css']
})
export class AjouterTypeFormationComponent implements OnInit {

  constructor(private typeFormationService: TypeFormationService, private parametrageEcheanceService: ParametrageEcheanceService, private router: Router) { }
  public typeFormation: TypeFormation = null;
  token: string;
  userConnected: Utilisateur;
  public parametrageEcheances: ParametrageEcheance[] = [];

  ngOnInit(): void {
    this.token = localStorage.getItem('id_token');
    this.userConnected = JSON.parse(localStorage.getItem('user'));
    if (this.userConnected.role.role === 'Administrateur') {

      this.parametrageEcheanceService.afficherParametrageEcheancesAsync().then( parametrageEcheance => {
        this.parametrageEcheances = parametrageEcheance;
        console.log(parametrageEcheance); });

      this.typeFormation = new TypeFormation();
    } else {
      this.router.navigateByUrl('/authentication/accessDenied');
    }
  }

  async Creer() {
    await this.typeFormationService.ajouterTypeFormationAsync(this.typeFormation).then( e => this.router.navigateByUrl('/trainingType/all') );
  }
}
