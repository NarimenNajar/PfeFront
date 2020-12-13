import { Component, OnInit } from '@angular/core';
import {CategorieService} from '../../../services/parametrage/categorie.service';
import {Router} from '@angular/router';
import {Categorie} from '../../../models/categorie';
import {Utilisateur} from '../../../models/utilisateur';
import {NatureFormationService} from '../../../services/parametrage/nature-formation.service';
import {NatureFormation} from '../../../models/natureFormation';

@Component({
  selector: 'app-ajouter-nature-formation',
  templateUrl: './ajouter-nature-formation.component.html',
  styleUrls: ['./ajouter-nature-formation.component.css']
})
export class AjouterNatureFormationComponent implements OnInit {

  constructor(private natureFormationService: NatureFormationService, private router: Router) { }
  public natureFormation: NatureFormation = null;
  token: string;
  userConnected: Utilisateur;

  ngOnInit(): void {
    this.token = localStorage.getItem('id_token');
    this.userConnected = JSON.parse(localStorage.getItem('user'));
    if (this.userConnected.role.role === 'Administrateur') {

      this.natureFormation = new NatureFormation();
    } else {
      this.router.navigateByUrl('/authentication/accessDenied');
    }
  }

  async CreerNatureFormation() {
    await this.natureFormationService.ajouterNatureFormationAsync(this.natureFormation).then( e => this.router.navigateByUrl('/trainingNature/all') );
  }
}
