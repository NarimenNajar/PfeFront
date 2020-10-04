import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AfficherParametrageEcheanceComponent} from './afficher-parametrage-echeance/afficher-parametrage-echeance.component';
import {AjouterParametrageEcheanceComponent} from './ajouter-parametrage-echeance/ajouter-parametrage-echeance.component';
import {ModifierParametrageEcheanceComponent} from './modifier-parametrage-echeance/modifier-parametrage-echeance.component';
import {ListeParametrageEcheanceComponent} from './liste-parametrage-echeance/liste-parametrage-echeance.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'my',
    pathMatch: 'full'
  },
  {
    path: 'show/:id',
    component: AfficherParametrageEcheanceComponent
  },
  {
    path: 'create',
    component: AjouterParametrageEcheanceComponent
  },
  {
    path: 'edit/:id',
    component: ModifierParametrageEcheanceComponent
  },
  {
    path: 'all',
    component: ListeParametrageEcheanceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrageEcheanceRoutingModule { }
