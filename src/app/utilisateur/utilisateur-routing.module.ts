import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AfficherUtilisateurComponent} from './afficher-utilisateur/afficher-utilisateur.component';
import {ModifierUtilisateurComponent} from './modifier-utilisateur/modifier-utilisateur.component';
import {ArchiveUtilisateursComponent} from './archive-utilisateurs/archive-utilisateurs.component';
import {ListeUtilisateursComponent} from './liste-utilisateurs/liste-utilisateurs.component';
import {ListeInstructionsAllComponent} from './liste-instructions-all/liste-instructions-all.component';
import {ListeInstructionsInstructorComponent} from './liste-instructions-instructor/liste-instructions-instructor.component';
import {ListeInstructionsTraineeComponent} from './liste-instructions-trainee/liste-instructions-trainee.component';
import {ListeInstructionsArchiveComponent} from "./liste-instructions-archive/liste-instructions-archive.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: 'my',
    pathMatch: 'full'
  },
  {
    path: 'show/:id',
    component: AfficherUtilisateurComponent
  },
  {
    path: 'edit/:id',
    component: ModifierUtilisateurComponent
  },
  {
    path: 'archive',
    component: ArchiveUtilisateursComponent
  },
  {
    path: 'all',
    component: ListeUtilisateursComponent
  },
  {
    path: 'instruction/all/:id',
    component: ListeInstructionsAllComponent
  },
  {
    path: 'instruction/instructor/:id',
    component: ListeInstructionsInstructorComponent
  },
  {
    path: 'instruction/trainee/:id',
    component: ListeInstructionsTraineeComponent
  },
  {
    path: 'instruction/archive/:id',
    component: ListeInstructionsArchiveComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilisateurRoutingModule { }
