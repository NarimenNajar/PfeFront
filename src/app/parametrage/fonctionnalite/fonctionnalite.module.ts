import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FonctionnaliteRoutingModule } from './fonctionnalite-routing.module';
import { AjouterFonctionnaliteComponent } from './ajouter-fonctionnalite/ajouter-fonctionnalite.component';
import { ModifierFonctionnaliteComponent } from './modifier-fonctionnalite/modifier-fonctionnalite.component';
import { ListeFonctionnaliteComponent } from './liste-fonctionnalite/liste-fonctionnalite.component';


@NgModule({
  declarations: [AjouterFonctionnaliteComponent, ModifierFonctionnaliteComponent, ListeFonctionnaliteComponent],
  imports: [
    CommonModule,
    FonctionnaliteRoutingModule
  ]
})
export class FonctionnaliteModule { }
