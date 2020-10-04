import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeFonctionRoutingModule } from './type-fonction-routing.module';
import { AjouterTypeFonctionComponent } from './ajouter-type-fonction/ajouter-type-fonction.component';
import { ModifierTypeFonctionComponent } from './modifier-type-fonction/modifier-type-fonction.component';
import { ListeTypeFonctionComponent } from './liste-type-fonction/liste-type-fonction.component';
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
  declarations: [AjouterTypeFonctionComponent, ModifierTypeFonctionComponent, ListeTypeFonctionComponent],
  imports: [
    CommonModule,
    TypeFonctionRoutingModule,
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
export class TypeFonctionModule { }
