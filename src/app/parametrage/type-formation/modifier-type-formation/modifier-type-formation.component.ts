import { Component, OnInit } from '@angular/core';
import {Utilisateur} from '../../../models/utilisateur';
import {Categorie} from '../../../models/categorie';
import {CategorieService} from '../../../services/parametrage/categorie.service';
import {ActivatedRoute, Router} from '@angular/router';
import {TypeFormation} from '../../../models/typeFormation';
import {TypeFormationService} from '../../../services/parametrage/type-formation.service';
import {ParametrageEcheanceService} from "../../../services/parametrage/parametrage-echeance.service";
import {ParametrageEcheance} from "../../../models/parametrageEcheance";

@Component({
  selector: 'app-modifier-type-formation',
  templateUrl: './modifier-type-formation.component.html',
  styleUrls: ['./modifier-type-formation.component.css']
})
export class ModifierTypeFormationComponent implements OnInit {

  private idTypeFormation: number;
  typeFormation: TypeFormation = new TypeFormation();
  constructor(private typeFormationService: TypeFormationService, private router: Router, private activatedRoute: ActivatedRoute,  private parametrageEcheanceService: ParametrageEcheanceService) { }
  token: string;
  userConnected: Utilisateur;
  public parametrageEcheances: ParametrageEcheance[] = [];

  async ngOnInit() {
    this.token = localStorage.getItem('id_token');
    this.userConnected = JSON.parse(localStorage.getItem('user'));
    this.idTypeFormation = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(this.activatedRoute.snapshot.paramMap.get('id'));
    if (this.userConnected.role.role === 'Administrateur') {
      this.parametrageEcheanceService.afficherParametrageEcheancesAsync().then( parametrageEcheance => {
        this.parametrageEcheances = parametrageEcheance;
        console.log(parametrageEcheance); });
      this.typeFormation = await this.typeFormationService.afficherDetailTypeFormationAsync(this.idTypeFormation);
    } else {
      this.router.navigateByUrl('/authentication/accessDenied');
    }
  }

  async update(idTypeFormation, typeFormation) {
    await this.typeFormationService.updateTypeFormation(idTypeFormation, typeFormation).then( e => this.router.navigateByUrl('/trainingType/all') );
  }


}
