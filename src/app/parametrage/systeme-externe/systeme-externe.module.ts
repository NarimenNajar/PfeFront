import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemeExterneRoutingModule } from './systeme-externe-routing.module';
import { AfficherSystemeExterneComponent } from './afficher-systeme-externe/afficher-systeme-externe.component';
import { AjouterSystemeExterneComponent } from './ajouter-systeme-externe/ajouter-systeme-externe.component';
import { ModifierSystemeExterneComponent } from './modifier-systeme-externe/modifier-systeme-externe.component';
import { ListeSystemeExterneComponent } from './liste-systeme-externe/liste-systeme-externe.component';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [AfficherSystemeExterneComponent, AjouterSystemeExterneComponent, ModifierSystemeExterneComponent, ListeSystemeExterneComponent],
  imports: [
    CommonModule,
    SystemeExterneRoutingModule,
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
export class SystemeExterneModule { }
