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


@NgModule({
  declarations: [AfficherUtilisateurComponent, ModifierUtilisateurComponent, ListeUtilisateursComponent, ArchiveUtilisateursComponent],
  imports: [
    CommonModule,
    UtilisateurRoutingModule,
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule
  ]
})
export class UtilisateurModule { }
