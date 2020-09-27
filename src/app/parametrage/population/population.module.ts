import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopulationRoutingModule } from './population-routing.module';
import { AfficherPopulationComponent } from './afficher-population/afficher-population.component';
import { AjouterPopulationComponent } from './ajouter-population/ajouter-population.component';
import { ModifierPopulationComponent } from './modifier-population/modifier-population.component';
import { ListePopulationsComponent } from './liste-populations/liste-populations.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatPaginatorModule} from "@angular/material/paginator";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [AfficherPopulationComponent, AjouterPopulationComponent, ModifierPopulationComponent, ListePopulationsComponent],
  imports: [
    CommonModule,
    PopulationRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatPaginatorModule,
    FormsModule
  ]
})
export class PopulationModule { }
