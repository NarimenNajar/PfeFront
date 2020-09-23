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


@NgModule({
  declarations: [CreerSyllabusComponent, ListeSyllabusComponent, ModifierSyllabusComponent, AfficherSyllabusComponent],
  imports: [
    CommonModule,
    SyllabusRoutingModule,
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class SyllabusModule { }
