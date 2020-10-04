import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AfficherFormationComponent} from './afficher-formation/afficher-formation.component';
import {AjouterFormationComponent} from './ajouter-formation/ajouter-formation.component';
import {ModifierFormationComponent} from './modifier-formation/modifier-formation.component';
import {ListeFormationsComponent} from './liste-formations/liste-formations.component';
import {ListeFormationPNCComponent} from "./liste-formation-pnc/liste-formation-pnc.component";
import {ListeFormationPNTComponent} from "./liste-formation-pnt/liste-formation-pnt.component";
import {AjouterFormationPNTComponent} from "./ajouter-formation-pnt/ajouter-formation-pnt.component";
import {AjouterFormationPNCComponent} from "./ajouter-formation-pnc/ajouter-formation-pnc.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: 'all',
    pathMatch: 'full'
  },
  {
    path: 'show/:id',
    component: AfficherFormationComponent
  },
  {
    path: 'add',
    component: AjouterFormationComponent
  },
  {
    path: 'addPNT',
    component: AjouterFormationPNTComponent
  },
  {
    path: 'addPNC',
    component: AjouterFormationPNCComponent
  },
  {
    path: 'edit/:id',
    component: ModifierFormationComponent
  },
  {
    path: 'all',
    component: ListeFormationsComponent
  },
  {
    path: 'allPNC',
    component: ListeFormationPNCComponent
  },
  {
    path: 'allPNT',
    component: ListeFormationPNTComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormationRoutingModule { }
