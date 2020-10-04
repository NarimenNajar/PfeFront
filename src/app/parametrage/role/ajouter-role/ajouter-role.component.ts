import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {RoleService} from '../../../services/parametrage/role.service';
import {Role} from '../../../models/role';
import {Fonctionnalite} from '../../../models/fonctionnalite';
import {FonctionnaliteService} from '../../../services/parametrage/fonctionnalite.service';

@Component({
  selector: 'app-ajouter-role',
  templateUrl: './ajouter-role.component.html',
  styleUrls: ['./ajouter-role.component.css']
})
export class AjouterRoleComponent implements OnInit {

  constructor(private roleService: RoleService, private router: Router, private fonctionnaliteService: FonctionnaliteService) { }
  public role: Role = null;
  public fonctionnalites: Fonctionnalite[] = [];

  ngOnInit(): void {
    this.role = new Role();
    this.fonctionnaliteService.afficherFonctionnalitesAsync().then(fcts => {
      this.fonctionnalites = fcts;
      console.log(fcts); });

  }
  async CreerRole() {
    await this.roleService.ajouterRoleAsync(this.role).then( e => this.router.navigateByUrl('/role/all') );
  }

}
