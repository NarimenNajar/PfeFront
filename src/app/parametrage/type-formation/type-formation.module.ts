import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeFormationRoutingModule } from './type-formation-routing.module';
import { AjouterTypeFormationComponent } from './ajouter-type-formation/ajouter-type-formation.component';
import { ModifierTypeFormationComponent } from './modifier-type-formation/modifier-type-formation.component';
import { AfficherTypeFormationComponent } from './afficher-type-formation/afficher-type-formation.component';
import { ListeTypeFormationComponent } from './liste-type-formation/liste-type-formation.component';
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


@NgModule({
  declarations: [AjouterTypeFormationComponent, ModifierTypeFormationComponent, AfficherTypeFormationComponent, ListeTypeFormationComponent],
  imports: [
    CommonModule,
    TypeFormationRoutingModule,
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
export class TypeFormationModule { }
