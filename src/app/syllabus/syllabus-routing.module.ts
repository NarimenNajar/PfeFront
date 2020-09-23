import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AfficherSyllabusComponent} from './afficher-syllabus/afficher-syllabus.component';
import {CreerSyllabusComponent} from './creer-syllabus/creer-syllabus.component';
import {ModifierSyllabusComponent} from './modifier-syllabus/modifier-syllabus.component';
import {ListeSyllabusComponent} from './liste-syllabus/liste-syllabus.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'my',
    pathMatch: 'full'
  },
  {
    path: 'show/:id',
    component: AfficherSyllabusComponent
  },
  {
    path: 'create',
    component: CreerSyllabusComponent
  },
  {
    path: 'edit',
    component: ModifierSyllabusComponent
  },
  {
    path: 'all',
    component: ListeSyllabusComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SyllabusRoutingModule { }
