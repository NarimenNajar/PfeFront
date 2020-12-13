import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {RoleService} from '../../../services/parametrage/role.service';
import {Role} from '../../../models/role';
import {Fonctionnalite} from '../../../models/fonctionnalite';
import {FonctionnaliteService} from '../../../services/parametrage/fonctionnalite.service';
import {Utilisateur} from '../../../models/utilisateur';

@Component({
  selector: 'app-ajouter-role',
  templateUrl: './ajouter-role.component.html',
  styleUrls: ['./ajouter-role.component.css']
})
export class AjouterRoleComponent implements OnInit {

  constructor(private roleService: RoleService, private router: Router, private fonctionnaliteService: FonctionnaliteService) { }
  public role: Role = null;
  public fonctionnalites: Fonctionnalite[] = [];
  token: string;
  userConnected: Utilisateur;

  ngOnInit(): void {
    this.token = localStorage.getItem('id_token');
    this.userConnected = JSON.parse(localStorage.getItem('user'));
    if (this.userConnected.role.role === 'Administrateur') {

      this.role = new Role();
      this.fonctionnaliteService.afficherFonctionnalitesAsync().then(fcts => {
      this.fonctionnalites = fcts;
      console.log(fcts); });
  } else {
      this.router.navigateByUrl('/authentication/accessDenied');
}
  }
  async CreerRole() {
    await this.roleService.ajouterRoleAsync(this.role).then( e => this.router.navigateByUrl('/role/all') );
  }

}
