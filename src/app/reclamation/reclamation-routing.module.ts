import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AfficherReclamationComponent} from './afficher-reclamation/afficher-reclamation.component';
import {AjouterReclamationComponent} from './ajouter-reclamation/ajouter-reclamation.component';
import {MesReclamationsComponent} from './mes-reclamations/mes-reclamations.component';
import {ListeReclamationsComponent} from './liste-reclamations/liste-reclamations.component';
import {ListeReclamationsTraiteeComponent} from './liste-reclamations-traitee/liste-reclamations-traitee.component';
import {ListeReclamationsNonTraiteeComponent} from './liste-reclamations-non-traitee/liste-reclamations-non-traitee.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'my',
    pathMatch: 'full'
  },
  {
    path: 'show',
    component: AfficherReclamationComponent
  },
  {
    path: 'add',
    component: AjouterReclamationComponent
  },
  {
    path: 'my',
    component: MesReclamationsComponent
  },
  {
    path: 'all',
    component: ListeReclamationsComponent
  },
  {
    path: 'processed',
    component: ListeReclamationsTraiteeComponent
  },
  {
    path: 'notProcessed',
    component: ListeReclamationsNonTraiteeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReclamationRoutingModule { }
