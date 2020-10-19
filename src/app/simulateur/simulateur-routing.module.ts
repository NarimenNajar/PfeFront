import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AfficherFormationComponent} from '../formation/afficher-formation/afficher-formation.component';
import {AjouterFormationComponent} from '../formation/ajouter-formation/ajouter-formation.component';
import {AjouterFormationPNTComponent} from '../formation/ajouter-formation-pnt/ajouter-formation-pnt.component';
import {AjouterFormationPNCComponent} from '../formation/ajouter-formation-pnc/ajouter-formation-pnc.component';
import {ModifierFormationComponent} from '../formation/modifier-formation/modifier-formation.component';
import {ListeFormationsComponent} from '../formation/liste-formations/liste-formations.component';
import {ListeFormationPNCComponent} from '../formation/liste-formation-pnc/liste-formation-pnc.component';
import {ListeFormationPNTComponent} from '../formation/liste-formation-pnt/liste-formation-pnt.component';
import {AjouterInstructionComponent} from '../formation/ajouter-instruction/ajouter-instruction.component';
import {AfficherSimulateurComponent} from './afficher-simulateur/afficher-simulateur.component';
import {AjouterSimulateurComponent} from './ajouter-simulateur/ajouter-simulateur.component';
import {ModifierSimulateurComponent} from './modifier-simulateur/modifier-simulateur.component';
import {ListeSimulateursComponent} from './liste-simulateurs/liste-simulateurs.component';
import {AjouterInstructionSimulateurComponent} from './ajouter-instruction-simulateur/ajouter-instruction-simulateur.component';
import {ValidationInstructeurSimulateurComponent} from './validation-instructeur-simulateur/validation-instructeur-simulateur.component';
import {ValidationTraineeSimulateurComponent} from './validation-trainee-simulateur/validation-trainee-simulateur.component';
import {AfficherSyllabusValideTraineeComponent} from "./afficher-syllabus-valide-trainee/afficher-syllabus-valide-trainee.component";
import {AfficherSyllabusValideInstructorComponent} from "./afficher-syllabus-valide-instructor/afficher-syllabus-valide-instructor.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: 'all',
    pathMatch: 'full'
  },
  {
    path: 'show/:id',
    component: AfficherSimulateurComponent
  },
  {
    path: 'add',
    component: AjouterSimulateurComponent
  },
  {
    path: 'edit/:id',
    component: ModifierSimulateurComponent
  },
  {
    path: 'all',
    component: ListeSimulateursComponent
  },
  {
    path: 'addInstruction/:id',
    component: AjouterInstructionSimulateurComponent
  },
  {
    path: 'validate/instructor/:id',
    component: ValidationInstructeurSimulateurComponent
  },
  {
    path: 'show/validate/instructor/:id',
    component: AfficherSyllabusValideInstructorComponent
  },
  {
    path: 'validate/trainee/:id',
    component: ValidationTraineeSimulateurComponent
  },
  {
    path: 'show/validate/trainee/:id',
    component: AfficherSyllabusValideTraineeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimulateurRoutingModule { }
