import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametrageEcheanceRoutingModule } from './parametrage-echeance-routing.module';
import { AjouterParametrageEcheanceComponent } from './ajouter-parametrage-echeance/ajouter-parametrage-echeance.component';
import { ModifierParametrageEcheanceComponent } from './modifier-parametrage-echeance/modifier-parametrage-echeance.component';
import { AfficherParametrageEcheanceComponent } from './afficher-parametrage-echeance/afficher-parametrage-echeance.component';
import { ListeParametrageEcheanceComponent } from './liste-parametrage-echeance/liste-parametrage-echeance.component';
import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatIconModule} from "@angular/material/icon";
import {MatPaginatorModule} from "@angular/material/paginator";


@NgModule({
  declarations: [AjouterParametrageEcheanceComponent, ModifierParametrageEcheanceComponent, AfficherParametrageEcheanceComponent, ListeParametrageEcheanceComponent],
  imports: [
    CommonModule,
    ParametrageEcheanceRoutingModule,
    FormsModule,
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
export class ParametrageEcheanceModule { }
