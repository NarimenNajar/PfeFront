import { Component, OnInit } from '@angular/core';
import {Categorie} from "../../../models/categorie";
import {CategorieService} from "../../../services/parametrage/categorie.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Utilisateur} from "../../../models/utilisateur";
import {NatureFormation} from "../../../models/natureFormation";
import {NatureFormationService} from "../../../services/parametrage/nature-formation.service";

@Component({
  selector: 'app-modifier-nature-formation',
  templateUrl: './modifier-nature-formation.component.html',
  styleUrls: ['./modifier-nature-formation.component.css']
})
export class ModifierNatureFormationComponent implements OnInit {

  private idNatureFormation: number;
  natureFormation: NatureFormation = new NatureFormation();
  constructor(private natureFormationService: NatureFormationService, private router: Router, private activatedRoute: ActivatedRoute ) { }
  token: string;
  userConnected: Utilisateur;

  async ngOnInit() {
    this.token = localStorage.getItem('id_token');
    this.userConnected = JSON.parse(localStorage.getItem('user'));
    this.idNatureFormation = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(this.activatedRoute.snapshot.paramMap.get('id'));
    if (this.userConnected.role.role === 'Administrateur') {

      this.natureFormation = await this.natureFormationService.afficherDetailNatureFormationAsync(this.idNatureFormation);
    } else {
      this.router.navigateByUrl('/authentication/accessDenied');
    }
  }

  async update(idNatureFormation, natureFormation) {
    await this.natureFormationService.updateNatureFormation(idNatureFormation, natureFormation).then( e => this.router.navigateByUrl('/trainingNature/all') );
  }


}
