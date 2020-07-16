import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SyllabusRoutingModule } from './syllabus-routing.module';
import { CreerSyllabusComponent } from './creer-syllabus/creer-syllabus.component';
import { ListeSyllabusComponent } from './liste-syllabus/liste-syllabus.component';
import { ModifierSyllabusComponent } from './modifier-syllabus/modifier-syllabus.component';
import { AfficherSyllabusComponent } from './afficher-syllabus/afficher-syllabus.component';


@NgModule({
  declarations: [CreerSyllabusComponent, ListeSyllabusComponent, ModifierSyllabusComponent, AfficherSyllabusComponent],
  imports: [
    CommonModule,
    SyllabusRoutingModule
  ]
})
export class SyllabusModule { }
