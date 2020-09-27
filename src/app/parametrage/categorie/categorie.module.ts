import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategorieRoutingModule } from './categorie-routing.module';
import { AjouterCategorieComponent } from './ajouter-categorie/ajouter-categorie.component';
import { ListeCategoriesComponent } from './liste-categories/liste-categories.component';
import { AfficherCategorieComponent } from './afficher-categorie/afficher-categorie.component';
import { ModifierCategorieComponent } from './modifier-categorie/modifier-categorie.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatPaginatorModule} from '@angular/material/paginator';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [AjouterCategorieComponent, ListeCategoriesComponent, AfficherCategorieComponent, ModifierCategorieComponent],
  imports: [
    CommonModule,
    CategorieRoutingModule,
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
export class CategorieModule { }
