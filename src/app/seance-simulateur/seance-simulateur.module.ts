import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeanceSimulateurRoutingModule } from './seance-simulateur-routing.module';
import { AfficherSeanceSimulateurComponent } from './afficher-seance-simulateur/afficher-seance-simulateur.component';
import { ModifierSeanceSimulateurComponent } from './modifier-seance-simulateur/modifier-seance-simulateur.component';
import { ArchiveSeancesSimulateurComponent } from './archive-seances-simulateur/archive-seances-simulateur.component';
import { MesSeancesSimulateurComponent } from './mes-seances-simulateur/mes-seances-simulateur.component';
import { ListeSeancesSimulateurComponent } from './liste-seances-simulateur/liste-seances-simulateur.component';
import { AjouterSeanceSimulateurComponent } from './ajouter-seance-simulateur/ajouter-seance-simulateur.component';
import { NoterSeanceSimulateurComponent } from './noter-seance-simulateur/noter-seance-simulateur.component';
import { ValiderSeanceSimulateurComponent } from './valider-seance-simulateur/valider-seance-simulateur.component';


@NgModule({
  declarations: [AfficherSeanceSimulateurComponent, ModifierSeanceSimulateurComponent, ArchiveSeancesSimulateurComponent, MesSeancesSimulateurComponent, ListeSeancesSimulateurComponent, AjouterSeanceSimulateurComponent, NoterSeanceSimulateurComponent, ValiderSeanceSimulateurComponent],
  imports: [
    CommonModule,
    SeanceSimulateurRoutingModule
  ]
})
export class SeanceSimulateurModule { }
