import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AjouterTypeFonctionComponent} from './ajouter-type-fonction/ajouter-type-fonction.component';
import {ModifierTypeFonctionComponent} from './modifier-type-fonction/modifier-type-fonction.component';
import {ListeTypeFonctionComponent} from './liste-type-fonction/liste-type-fonction.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'my',
    pathMatch: 'full'
  },
  {
    path: 'create',
    component: AjouterTypeFonctionComponent
  },
  {
    path: 'edit/:id',
    component: ModifierTypeFonctionComponent
  },
  {
    path: 'all',
    component: ListeTypeFonctionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeFonctionRoutingModule { }
