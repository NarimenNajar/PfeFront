import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilisateurRoutingModule } from './utilisateur-routing.module';
import { AfficherUtilisateurComponent } from './afficher-utilisateur/afficher-utilisateur.component';
import { ModifierUtilisateurComponent } from './modifier-utilisateur/modifier-utilisateur.component';
import { ListeUtilisateursComponent } from './liste-utilisateurs/liste-utilisateurs.component';
import { ArchiveUtilisateursComponent } from './archive-utilisateurs/archive-utilisateurs.component';


@NgModule({
  declarations: [AfficherUtilisateurComponent, ModifierUtilisateurComponent, ListeUtilisateursComponent, ArchiveUtilisateursComponent],
  imports: [
    CommonModule,
    UtilisateurRoutingModule
  ]
})
export class UtilisateurModule { }
