import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SyllabusRoutingModule } from './syllabus-routing.module';
import { CreerSyllabusComponent } from './creer-syllabus/creer-syllabus.component';
import { ListeSyllabusComponent } from './liste-syllabus/liste-syllabus.component';
import { ModifierSyllabusComponent } from './modifier-syllabus/modifier-syllabus.component';
import { AfficherSyllabusComponent } from './afficher-syllabus/afficher-syllabus.component';
import {FormsModule} from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";


@NgModule({
  declarations: [CreerSyllabusComponent, ListeSyllabusComponent, ModifierSyllabusComponent, AfficherSyllabusComponent],
  imports: [
    CommonModule,
    SyllabusRoutingModule,
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class SyllabusModule { }
