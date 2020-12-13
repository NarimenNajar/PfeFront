import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AjouterNatureFormationComponent} from './ajouter-nature-formation/ajouter-nature-formation.component';
import {ModifierNatureFormationComponent} from './modifier-nature-formation/modifier-nature-formation.component';
import {ListeNatureFormationComponent} from './liste-nature-formation/liste-nature-formation.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'my',
    pathMatch: 'full'
  },
  {
    path: 'create',
    component: AjouterNatureFormationComponent
  },
  {
    path: 'edit/:id',
    component: ModifierNatureFormationComponent
  },
  {
    path: 'all',
    component: ListeNatureFormationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NatureFormationRoutingModule { }
