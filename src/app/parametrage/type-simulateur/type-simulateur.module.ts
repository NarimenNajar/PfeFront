import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeSimulateurRoutingModule } from './type-simulateur-routing.module';
import { AjouterTypeSimulateurComponent } from './ajouter-type-simulateur/ajouter-type-simulateur.component';
import { ModifierTypeSimulateurComponent } from './modifier-type-simulateur/modifier-type-simulateur.component';
import { ListeTypeSimulateurComponent } from './liste-type-simulateur/liste-type-simulateur.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatPaginatorModule} from "@angular/material/paginator";
import {NgSelectModule} from "@ng-select/ng-select";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [AjouterTypeSimulateurComponent, ModifierTypeSimulateurComponent, ListeTypeSimulateurComponent],
  imports: [
    CommonModule,
    TypeSimulateurRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatTooltipModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    NgSelectModule,
    FormsModule
  ]
})
export class TypeSimulateurModule { }
