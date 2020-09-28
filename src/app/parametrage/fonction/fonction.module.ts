import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FonctionRoutingModule } from './fonction-routing.module';
import { AjouterFonctionComponent } from './ajouter-fonction/ajouter-fonction.component';
import { AfficherFonctionComponent } from './afficher-fonction/afficher-fonction.component';
import { ModifierFonctionComponent } from './modifier-fonction/modifier-fonction.component';
import { ListeFonctionComponent } from './liste-fonction/liste-fonction.component';
import {FormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import {NgSelectModule} from "@ng-select/ng-select";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatPaginatorModule} from "@angular/material/paginator";


@NgModule({
  declarations: [AjouterFonctionComponent, AfficherFonctionComponent, ModifierFonctionComponent, ListeFonctionComponent],
  imports: [
    CommonModule,
    FonctionRoutingModule,
    FormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    NgSelectModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatPaginatorModule
  ],
  providers: [
    MatDatepickerModule,
  ],
})
export class FonctionModule { }
