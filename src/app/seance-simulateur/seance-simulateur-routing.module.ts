import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AfficherSeanceSimulateurComponent} from './afficher-seance-simulateur/afficher-seance-simulateur.component';
import {AjouterSeanceSimulateurComponent} from './ajouter-seance-simulateur/ajouter-seance-simulateur.component';
import {ModifierSeanceSimulateurComponent} from './modifier-seance-simulateur/modifier-seance-simulateur.component';
import {ListeSeancesSimulateurComponent} from './liste-seances-simulateur/liste-seances-simulateur.component';
import {MesSeancesSimulateurComponent} from './mes-seances-simulateur/mes-seances-simulateur.component';
import {ArchiveSeancesSimulateurComponent} from './archive-seances-simulateur/archive-seances-simulateur.component';
import {NoterSeanceSimulateurComponent} from './noter-seance-simulateur/noter-seance-simulateur.component';
import {ValiderSeanceSimulateurComponent} from './valider-seance-simulateur/valider-seance-simulateur.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'all',
    pathMatch: 'full'
  },
  {
    path: 'show',
    component: AfficherSeanceSimulateurComponent
  },
  {
    path: 'add',
    component: AjouterSeanceSimulateurComponent
  },
  {
    path: 'edit',
    component: ModifierSeanceSimulateurComponent
  },
  {
    path: 'all',
    component: ListeSeancesSimulateurComponent
  },
  {
    path: 'my',
    component: MesSeancesSimulateurComponent
  },
  {
    path: 'archive',
    component: ArchiveSeancesSimulateurComponent
  },
  {
    path: 'note',
    component: NoterSeanceSimulateurComponent
  },
  {
    path: 'validate',
    component: ValiderSeanceSimulateurComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeanceSimulateurRoutingModule { }
