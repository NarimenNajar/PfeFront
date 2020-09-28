import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AfficherCategorieComponent} from '../categorie/afficher-categorie/afficher-categorie.component';
import {AjouterCategorieComponent} from '../categorie/ajouter-categorie/ajouter-categorie.component';
import {AjouterFonctionComponent} from './ajouter-fonction/ajouter-fonction.component';
import {AfficherFonctionComponent} from './afficher-fonction/afficher-fonction.component';
import {ModifierCategorieComponent} from '../categorie/modifier-categorie/modifier-categorie.component';
import {ListeCategoriesComponent} from '../categorie/liste-categories/liste-categories.component';
import {ModifierFonctionComponent} from './modifier-fonction/modifier-fonction.component';
import {ListeFonctionComponent} from './liste-fonction/liste-fonction.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'my',
    pathMatch: 'full'
  },
  {
    path: 'show/:id',
    component: AfficherFonctionComponent
  },
  {
    path: 'create',
    component: AjouterFonctionComponent
  }
  ,
  {
    path: 'edit/:id',
    component: ModifierFonctionComponent
  },
  {
    path: 'all',
    component: ListeFonctionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FonctionRoutingModule { }
