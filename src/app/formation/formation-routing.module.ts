import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AfficherFormationComponent} from './afficher-formation/afficher-formation.component';
import {AjouterFormationComponent} from './ajouter-formation/ajouter-formation.component';
import {ModifierFormationComponent} from './modifier-formation/modifier-formation.component';
import {ListeFormationsComponent} from './liste-formations/liste-formations.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'all',
    pathMatch: 'full'
  },
  {
    path: 'show',
    component: AfficherFormationComponent
  },
  {
    path: 'add',
    component: AjouterFormationComponent
  },
  {
    path: 'edit',
    component: ModifierFormationComponent
  },
  {
    path: 'all',
    component: ListeFormationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormationRoutingModule { }
