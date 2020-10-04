import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleRoutingModule } from './role-routing.module';
import { AjouterRoleComponent } from './ajouter-role/ajouter-role.component';
import { ModifierRoleComponent } from './modifier-role/modifier-role.component';
import { AfficherRoleComponent } from './afficher-role/afficher-role.component';
import { ListeRoleComponent } from './liste-role/liste-role.component';
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


@NgModule({
  declarations: [AjouterRoleComponent, ModifierRoleComponent, AfficherRoleComponent, ListeRoleComponent],
  imports: [
    CommonModule,
    RoleRoutingModule,
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
export class RoleModule { }
