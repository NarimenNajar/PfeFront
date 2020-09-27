import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AfficherCategorieComponent} from './afficher-categorie/afficher-categorie.component';
import {AjouterCategorieComponent} from './ajouter-categorie/ajouter-categorie.component';
import {ModifierCategorieComponent} from './modifier-categorie/modifier-categorie.component';
import {ListeCategoriesComponent} from './liste-categories/liste-categories.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'my',
    pathMatch: 'full'
  },
  {
    path: 'show/:id',
    component: AfficherCategorieComponent
  },
  {
    path: 'create',
    component: AjouterCategorieComponent
  },
  {
    path: 'edit/:id',
    component: ModifierCategorieComponent
  },
  {
    path: 'all',
    component: ListeCategoriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategorieRoutingModule { }
