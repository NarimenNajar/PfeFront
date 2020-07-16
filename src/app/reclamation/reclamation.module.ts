import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReclamationRoutingModule } from './reclamation-routing.module';
import { AjouterReclamationComponent } from './ajouter-reclamation/ajouter-reclamation.component';
import { AfficherReclamationComponent } from './afficher-reclamation/afficher-reclamation.component';
import { ListeReclamationsComponent } from './liste-reclamations/liste-reclamations.component';
import { MesReclamationsComponent } from './mes-reclamations/mes-reclamations.component';


@NgModule({
  declarations: [AjouterReclamationComponent, AfficherReclamationComponent, ListeReclamationsComponent, MesReclamationsComponent],
  imports: [
    CommonModule,
    ReclamationRoutingModule
  ]
})
export class ReclamationModule { }
