import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NatureFormationRoutingModule } from './nature-formation-routing.module';
import { ListeNatureFormationComponent } from './liste-nature-formation/liste-nature-formation.component';
import { AjouterNatureFormationComponent } from './ajouter-nature-formation/ajouter-nature-formation.component';
import { ModifierNatureFormationComponent } from './modifier-nature-formation/modifier-nature-formation.component';
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
  declarations: [ListeNatureFormationComponent, AjouterNatureFormationComponent, ModifierNatureFormationComponent],
  imports: [
    CommonModule,
    NatureFormationRoutingModule,
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
export class NatureFormationModule { }
