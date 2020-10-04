import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeFormationRoutingModule } from './type-formation-routing.module';
import { AjouterTypeFormationComponent } from './ajouter-type-formation/ajouter-type-formation.component';
import { ModifierTypeFormationComponent } from './modifier-type-formation/modifier-type-formation.component';
import { AfficherTypeFormationComponent } from './afficher-type-formation/afficher-type-formation.component';
import { ListeTypeFormationComponent } from './liste-type-formation/liste-type-formation.component';


@NgModule({
  declarations: [AjouterTypeFormationComponent, ModifierTypeFormationComponent, AfficherTypeFormationComponent, ListeTypeFormationComponent],
  imports: [
    CommonModule,
    TypeFormationRoutingModule
  ]
})
export class TypeFormationModule { }
