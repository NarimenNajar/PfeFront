import { Component, OnInit } from '@angular/core';
import {FormationService} from '../../services/activiteFormation/formation.service';
import {Router} from '@angular/router';
import {PopulationService} from '../../services/parametrage/population.service';
import {TypeFormationService} from '../../services/parametrage/type-formation.service';
import {NatureFormationService} from '../../services/parametrage/nature-formation.service';
import {ListeUtilisateursService} from '../../services/utilisateur/liste-utilisateurs.service';
import {ActiviteFormation} from '../../models/activiteFormation';
import {TypeFormation} from '../../models/typeFormation';
import {Population} from '../../models/population';
import {NatureFormation} from '../../models/natureFormation';
import {SeanceFormation} from '../../models/seanceFormation';
import {Utilisateur} from '../../models/utilisateur';
import {Instruction} from '../../models/Instruction';
import {AjouterUtilisateurService} from '../../services/utilisateur/ajouter-utilisateur.service';
import {Role} from '../../models/role';
import {Categorie} from '../../models/categorie';
import {RoleService} from '../../services/parametrage/role.service';
import {CategorieService} from '../../services/parametrage/categorie.service';

@Component({
  selector: 'app-ajouter-utilisateur',
  templateUrl: './ajouter-utilisateur.component.html',
  styleUrls: ['./ajouter-utilisateur.component.css']
})
export class AjouterUtilisateurComponent implements OnInit {

  constructor(private ajouterUtilisateurService: AjouterUtilisateurService, private router: Router, private roleService: RoleService, private categorieService: CategorieService) { }

  public utilisateurs: Utilisateur[] = [];
  public utilisateur: Utilisateur = null;
  public roles: Role[] = [];
  public categories: Categorie[] = [];


  token: string;
  userConnected: Utilisateur;

  ngOnInit(): void {
    this.token = localStorage.getItem('id_token');
    this.userConnected = JSON.parse(localStorage.getItem('user'));
    this.utilisateur = new Utilisateur();


    this.roleService.afficherRolesAsync().then( role => {
      this.roles = role;
      console.log(role); });


    this.categorieService.afficherCategorieAsync().then( categorie => {
      this.categories = categorie;
      console.log(categorie); });

  }

  async Creer() {
    await this.ajouterUtilisateurService.ajouterUtilisateurAsync(this.utilisateur).then( e => this.router.navigateByUrl('/user/all') );
  }


}
