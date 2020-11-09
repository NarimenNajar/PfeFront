import { Component, OnInit } from '@angular/core';
import {RoleService} from '../../../services/parametrage/role.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FonctionnaliteService} from '../../../services/parametrage/fonctionnalite.service';
import {Fonctionnalite} from '../../../models/fonctionnalite';
import {Role} from '../../../models/role';
import {Utilisateur} from "../../../models/utilisateur";

@Component({
  selector: 'app-modifier-role',
  templateUrl: './modifier-role.component.html',
  styleUrls: ['./modifier-role.component.css']
})
export class ModifierRoleComponent implements OnInit {

  constructor(private roleService: RoleService, private router: Router, private activatedRoute: ActivatedRoute, private fonctionnaliteService: FonctionnaliteService) { }
  public fonctionnalites: Fonctionnalite[] = [];
  public role: Role = null;
  private idRole: number;
  token: string;
  userConnected: Utilisateur;


  async ngOnInit() {
    this.token = localStorage.getItem('id_token');
    this.userConnected = JSON.parse(localStorage.getItem('user'));

    this.fonctionnaliteService.afficherFonctionnalitesAsync().then(fcts => {
      this.fonctionnalites = fcts;
      console.log(fcts); });
    this.idRole = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(this.activatedRoute.snapshot.paramMap.get('id'));
    this.role = await this.roleService.afficherDetailRoleAsync(this.idRole);
  }

  async updateRole(idRole, role) {
    await this.roleService.updateRole(idRole, role).then( e => this.router.navigateByUrl('/role/all') );
  }


}
