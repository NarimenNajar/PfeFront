import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AjouterFonctionnaliteComponent} from './ajouter-fonctionnalite/ajouter-fonctionnalite.component';
import {ModifierFonctionnaliteComponent} from './modifier-fonctionnalite/modifier-fonctionnalite.component';
import {ListeFonctionnaliteComponent} from './liste-fonctionnalite/liste-fonctionnalite.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'my',
    pathMatch: 'full'
  },
  {
    path: 'create',
    component: AjouterFonctionnaliteComponent
  },
  {
    path: 'edit/:id',
    component: ModifierFonctionnaliteComponent
  },
  {
    path: 'all',
    component: ListeFonctionnaliteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FonctionnaliteRoutingModule { }
