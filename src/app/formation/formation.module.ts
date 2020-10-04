import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormationRoutingModule } from './formation-routing.module';
import { AjouterFormationComponent } from './ajouter-formation/ajouter-formation.component';
import { ModifierFormationComponent } from './modifier-formation/modifier-formation.component';
import { ListeFormationsComponent } from './liste-formations/liste-formations.component';
import { AfficherFormationComponent } from './afficher-formation/afficher-formation.component';
import {FormsModule} from "@angular/forms";
import {NgSelectModule} from "@ng-select/ng-select";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatIconModule} from "@angular/material/icon";
import {MatPaginatorModule} from "@angular/material/paginator";
import { ListeFormationPNCComponent } from './liste-formation-pnc/liste-formation-pnc.component';
import { ListeFormationPNTComponent } from './liste-formation-pnt/liste-formation-pnt.component';
import { AjouterFormationPNCComponent } from './ajouter-formation-pnc/ajouter-formation-pnc.component';
import { AjouterFormationPNTComponent } from './ajouter-formation-pnt/ajouter-formation-pnt.component';


@NgModule({
  declarations: [AjouterFormationComponent, ModifierFormationComponent, ListeFormationsComponent, AfficherFormationComponent, ListeFormationPNCComponent, ListeFormationPNTComponent, AjouterFormationPNCComponent, AjouterFormationPNTComponent],
  imports: [
    CommonModule,
    FormationRoutingModule,
    FormsModule,
    NgSelectModule,
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
export class FormationModule { }
