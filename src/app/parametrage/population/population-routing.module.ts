import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AfficherCategorieComponent} from "../categorie/afficher-categorie/afficher-categorie.component";
import {AjouterCategorieComponent} from "../categorie/ajouter-categorie/ajouter-categorie.component";
import {ModifierCategorieComponent} from "../categorie/modifier-categorie/modifier-categorie.component";
import {ListeCategoriesComponent} from "../categorie/liste-categories/liste-categories.component";
import {AfficherPopulationComponent} from "./afficher-population/afficher-population.component";
import {AjouterPopulationComponent} from "./ajouter-population/ajouter-population.component";
import {ModifierPopulationComponent} from "./modifier-population/modifier-population.component";
import {ListePopulationsComponent} from "./liste-populations/liste-populations.component";


const routes: Routes = [
  {
  path: '',
  redirectTo: 'my',
  pathMatch: 'full'
},
  {
    path: 'show/:id',
    component: AfficherPopulationComponent
  },
  {
    path: 'create',
    component: AjouterPopulationComponent
  },
  {
    path: 'edit/:id',
    component: ModifierPopulationComponent
  },
  {
    path: 'all',
    component: ListePopulationsComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PopulationRoutingModule { }
