import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AfficherTypeFormationComponent} from './afficher-type-formation/afficher-type-formation.component';
import {AjouterTypeFormationComponent} from './ajouter-type-formation/ajouter-type-formation.component';
import {ModifierTypeFormationComponent} from './modifier-type-formation/modifier-type-formation.component';
import {ListeTypeFormationComponent} from './liste-type-formation/liste-type-formation.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'my',
    pathMatch: 'full'
  },
  {
    path: 'show/:id',
    component: AfficherTypeFormationComponent
  },
  {
    path: 'create',
    component: AjouterTypeFormationComponent
  },
  {
    path: 'edit/:id',
    component: ModifierTypeFormationComponent
  },
  {
    path: 'all',
    component: ListeTypeFormationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeFormationRoutingModule { }
