import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AfficherUtilisateurComponent} from './afficher-utilisateur/afficher-utilisateur.component';
import {ModifierUtilisateurComponent} from './modifier-utilisateur/modifier-utilisateur.component';
import {ArchiveUtilisateursComponent} from './archive-utilisateurs/archive-utilisateurs.component';
import {ListeUtilisateursComponent} from './liste-utilisateurs/liste-utilisateurs.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'my',
    pathMatch: 'full'
  },
  {
    path: 'show',
    component: AfficherUtilisateurComponent
  },
  {
    path: 'edit',
    component: ModifierUtilisateurComponent
  },
  {
    path: 'archive',
    component: ArchiveUtilisateursComponent
  },
  {
    path: 'all',
    component: ListeUtilisateursComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilisateurRoutingModule { }
