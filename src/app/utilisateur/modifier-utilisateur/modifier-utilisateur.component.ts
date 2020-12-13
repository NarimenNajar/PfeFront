import { Component, OnInit } from '@angular/core';
import {Utilisateur} from '../../models/utilisateur';
import {TypeFormation} from '../../models/typeFormation';
import {TypeFormationService} from '../../services/parametrage/type-formation.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ParametrageEcheanceService} from '../../services/parametrage/parametrage-echeance.service';
import {ParametrageEcheance} from '../../models/parametrageEcheance';
import {ListeUtilisateursService} from '../../services/utilisateur/liste-utilisateurs.service';
import {RoleService} from '../../services/parametrage/role.service';
import {CategorieService} from '../../services/parametrage/categorie.service';
import {Role} from '../../models/role';
import {Categorie} from '../../models/categorie';

@Component({
  selector: 'app-modifier-utilisateur',
  templateUrl: './modifier-utilisateur.component.html',
  styleUrls: ['./modifier-utilisateur.component.css']
})
export class ModifierUtilisateurComponent implements OnInit {

  private idUtilisateur: number;
  utilisateur: Utilisateur = new Utilisateur();
  constructor(private listeUtilisateursService: ListeUtilisateursService, private router: Router, private activatedRoute: ActivatedRoute,  private roleService: RoleService,  private categorieService: CategorieService) { }
  token: string;
  userConnected: Utilisateur;
  public roles: Role[] = [];
  public categories: Categorie[] = [];

  async ngOnInit() {
    this.token = localStorage.getItem('id_token');
    this.userConnected = JSON.parse(localStorage.getItem('user'));
    this.idUtilisateur = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(this.activatedRoute.snapshot.paramMap.get('id'));
    if (this.userConnected.role.role === 'Administrateur') {
      this.roleService.afficherRolesAsync().then( role => {
        this.roles = role;
        console.log(role); });
      this.categorieService.afficherCategorieAsync().then( categorie => {
        this.categories = categorie;
        console.log(categorie); });

      this.utilisateur = await this.listeUtilisateursService.afficherDetailUtilisateurAsync(this.idUtilisateur);
    } else {
      this.router.navigateByUrl('/authentication/accessDenied');
    }
  }

  async update(id, utilisateur) {
    await this.listeUtilisateursService.updateUtilisateur(id, utilisateur).then( e => this.router.navigateByUrl('/user/all') );
  }

}
