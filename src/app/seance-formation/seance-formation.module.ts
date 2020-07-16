import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeanceFormationRoutingModule } from './seance-formation-routing.module';
import { AjouterSeanceComponent } from './ajouter-seance/ajouter-seance.component';
import { ListeSeancesComponent } from './liste-seances/liste-seances.component';
import { MesSeancesComponent } from './mes-seances/mes-seances.component';
import { ArchiveSeancesComponent } from './archive-seances/archive-seances.component';
import { ModifierSeanceComponent } from './modifier-seance/modifier-seance.component';
import { AfficherSeanceComponent } from './afficher-seance/afficher-seance.component';


@NgModule({
  declarations: [AjouterSeanceComponent, ListeSeancesComponent, MesSeancesComponent, ArchiveSeancesComponent, ModifierSeanceComponent, AfficherSeanceComponent],
  imports: [
    CommonModule,
    SeanceFormationRoutingModule
  ]
})
export class SeanceFormationModule { }
