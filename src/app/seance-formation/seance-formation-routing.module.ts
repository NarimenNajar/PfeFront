import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AfficherSeanceComponent} from './afficher-seance/afficher-seance.component';
import {AjouterSeanceComponent} from './ajouter-seance/ajouter-seance.component';
import {ModifierSeanceComponent} from './modifier-seance/modifier-seance.component';
import {ListeSeancesComponent} from './liste-seances/liste-seances.component';
import {MesSeancesComponent} from './mes-seances/mes-seances.component';
import {ArchiveSeancesComponent} from './archive-seances/archive-seances.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'all',
    pathMatch: 'full'
  },
  {
    path: 'show',
    component: AfficherSeanceComponent
  },
  {
    path: 'add',
    component: AjouterSeanceComponent
  },
  {
    path: 'edit',
    component: ModifierSeanceComponent
  },
  {
    path: 'all',
    component: ListeSeancesComponent
  },
  {
    path: 'my',
    component: MesSeancesComponent
  },
  {
    path: 'archive',
    component: ArchiveSeancesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeanceFormationRoutingModule { }
