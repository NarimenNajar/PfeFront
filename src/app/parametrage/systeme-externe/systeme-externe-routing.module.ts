import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AfficherSystemeExterneComponent} from './afficher-systeme-externe/afficher-systeme-externe.component';
import {AjouterSystemeExterneComponent} from './ajouter-systeme-externe/ajouter-systeme-externe.component';
import {ModifierSystemeExterneComponent} from './modifier-systeme-externe/modifier-systeme-externe.component';
import {ListeSystemeExterneComponent} from './liste-systeme-externe/liste-systeme-externe.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'all',
    pathMatch: 'full'
  },
  {
    path: 'show/:id',
    component: AfficherSystemeExterneComponent
  },
  {
    path: 'create',
    component: AjouterSystemeExterneComponent
  },
  {
    path: 'edit/:id',
    component: ModifierSystemeExterneComponent
  },
  {
    path: 'all',
    component: ListeSystemeExterneComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemeExterneRoutingModule { }
