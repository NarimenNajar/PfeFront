import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AfficherRoleComponent} from './afficher-role/afficher-role.component';
import {AjouterRoleComponent} from './ajouter-role/ajouter-role.component';
import {ModifierRoleComponent} from './modifier-role/modifier-role.component';
import {ListeRoleComponent} from './liste-role/liste-role.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'my',
    pathMatch: 'full'
  },
  {
    path: 'show/:id',
    component: AfficherRoleComponent
  },
  {
    path: 'create',
    component: AjouterRoleComponent
  },
  {
    path: 'edit/:id',
    component: ModifierRoleComponent
  },
  {
    path: 'all',
    component: ListeRoleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleRoutingModule { }
