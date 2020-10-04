import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AjouterTypeSimulateurComponent} from './ajouter-type-simulateur/ajouter-type-simulateur.component';
import {ModifierTypeSimulateurComponent} from './modifier-type-simulateur/modifier-type-simulateur.component';
import {ListeTypeSimulateurComponent} from './liste-type-simulateur/liste-type-simulateur.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'my',
    pathMatch: 'full'
  },
  {
    path: 'create',
    component: AjouterTypeSimulateurComponent
  },
  {
    path: 'edit/:id',
    component: ModifierTypeSimulateurComponent
  },
  {
    path: 'all',
    component: ListeTypeSimulateurComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeSimulateurRoutingModule { }
