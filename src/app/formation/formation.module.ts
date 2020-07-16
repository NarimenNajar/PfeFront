import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormationRoutingModule } from './formation-routing.module';
import { AjouterFormationComponent } from './ajouter-formation/ajouter-formation.component';
import { ModifierFormationComponent } from './modifier-formation/modifier-formation.component';
import { ListeFormationsComponent } from './liste-formations/liste-formations.component';
import { AfficherFormationComponent } from './afficher-formation/afficher-formation.component';


@NgModule({
  declarations: [AjouterFormationComponent, ModifierFormationComponent, ListeFormationsComponent, AfficherFormationComponent],
  imports: [
    CommonModule,
    FormationRoutingModule
  ]
})
export class FormationModule { }
