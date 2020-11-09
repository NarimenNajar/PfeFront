import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilisateurRoutingModule } from './utilisateur-routing.module';
import { AfficherUtilisateurComponent } from './afficher-utilisateur/afficher-utilisateur.component';
import { ModifierUtilisateurComponent } from './modifier-utilisateur/modifier-utilisateur.component';
import { ListeUtilisateursComponent } from './liste-utilisateurs/liste-utilisateurs.component';
import { ArchiveUtilisateursComponent } from './archive-utilisateurs/archive-utilisateurs.component';
import {SyllabusRoutingModule} from '../syllabus/syllabus-routing.module';
import {FormsModule} from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import { ListeInstructionsAllComponent } from './liste-instructions-all/liste-instructions-all.component';
import { ListeInstructionsInstructorComponent } from './liste-instructions-instructor/liste-instructions-instructor.component';
import { ListeInstructionsTraineeComponent } from './liste-instructions-trainee/liste-instructions-trainee.component';
import { ListeInstructionsArchiveComponent } from './liste-instructions-archive/liste-instructions-archive.component';
import { ListeFonctionsAllComponent } from './liste-fonctions-all/liste-fonctions-all.component';
import { ListeFonctionsCurrentComponent } from './liste-fonctions-current/liste-fonctions-current.component';
import { ListeFonctionsArchiveComponent } from './liste-fonctions-archive/liste-fonctions-archive.component';
import { AjouterUtilisateurComponent } from './ajouter-utilisateur/ajouter-utilisateur.component';
import {NgSelectModule} from "@ng-select/ng-select";


@NgModule({
  declarations: [AfficherUtilisateurComponent, ModifierUtilisateurComponent, ListeUtilisateursComponent, ArchiveUtilisateursComponent, ListeInstructionsAllComponent, ListeInstructionsInstructorComponent, ListeInstructionsTraineeComponent, ListeInstructionsArchiveComponent, ListeFonctionsAllComponent, ListeFonctionsCurrentComponent, ListeFonctionsArchiveComponent, AjouterUtilisateurComponent],
    imports: [
        CommonModule,
        UtilisateurRoutingModule,
        FormsModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatTooltipModule,
        MatButtonModule,
        MatPaginatorModule,
        MatSortModule,
        NgSelectModule
    ]
})
export class UtilisateurModule { }
