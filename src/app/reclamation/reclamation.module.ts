import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReclamationRoutingModule } from './reclamation-routing.module';
import { AjouterReclamationComponent } from './ajouter-reclamation/ajouter-reclamation.component';
import { AfficherReclamationComponent } from './afficher-reclamation/afficher-reclamation.component';
import { ListeReclamationsComponent } from './liste-reclamations/liste-reclamations.component';
import { MesReclamationsComponent } from './mes-reclamations/mes-reclamations.component';
import { ListeReclamationsNonTraiteeComponent } from './liste-reclamations-non-traitee/liste-reclamations-non-traitee.component';
import { ListeReclamationsTraiteeComponent } from './liste-reclamations-traitee/liste-reclamations-traitee.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatIconModule} from "@angular/material/icon";
import {MatPaginatorModule} from "@angular/material/paginator";


@NgModule({
  declarations: [AjouterReclamationComponent, AfficherReclamationComponent, ListeReclamationsComponent, MesReclamationsComponent, ListeReclamationsNonTraiteeComponent, ListeReclamationsTraiteeComponent],
  imports: [
    CommonModule,
    ReclamationRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    MatPaginatorModule
  ]
})
export class ReclamationModule { }
