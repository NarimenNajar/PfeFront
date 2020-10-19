import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimulateurRoutingModule } from './simulateur-routing.module';
import { ListeSimulateursComponent } from './liste-simulateurs/liste-simulateurs.component';
import { AjouterSimulateurComponent } from './ajouter-simulateur/ajouter-simulateur.component';
import { AfficherSimulateurComponent } from './afficher-simulateur/afficher-simulateur.component';
import { ModifierSimulateurComponent } from './modifier-simulateur/modifier-simulateur.component';
import { AjouterInstructionSimulateurComponent } from './ajouter-instruction-simulateur/ajouter-instruction-simulateur.component';
import { ValidationInstructeurSimulateurComponent } from './validation-instructeur-simulateur/validation-instructeur-simulateur.component';
import { ValidationTraineeSimulateurComponent } from './validation-trainee-simulateur/validation-trainee-simulateur.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatIconModule} from "@angular/material/icon";
import {MatPaginatorModule} from "@angular/material/paginator";
import {FormsModule} from "@angular/forms";
import {NgSelectModule} from "@ng-select/ng-select";
import { AfficherSyllabusValideInstructorComponent } from './afficher-syllabus-valide-instructor/afficher-syllabus-valide-instructor.component';
import { AfficherSyllabusValideTraineeComponent } from './afficher-syllabus-valide-trainee/afficher-syllabus-valide-trainee.component';


@NgModule({
  declarations: [ListeSimulateursComponent, AjouterSimulateurComponent, AfficherSimulateurComponent, ModifierSimulateurComponent, AjouterInstructionSimulateurComponent, ValidationInstructeurSimulateurComponent, ValidationTraineeSimulateurComponent, AfficherSyllabusValideInstructorComponent, AfficherSyllabusValideTraineeComponent],
  imports: [
    CommonModule,
    SimulateurRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    MatPaginatorModule,
    FormsModule,
    NgSelectModule
  ]
})
export class SimulateurModule { }
