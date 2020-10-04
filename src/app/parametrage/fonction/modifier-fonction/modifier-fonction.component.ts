import { Component, OnInit } from '@angular/core';

import {ActivatedRoute, Router} from '@angular/router';
import {FonctionService} from '../../../services/parametrage/fonction.service';
import {Fonction} from '../../../models/fonction';
import {TypeFonction} from '../../../models/typeFonction';
import {Utilisateur} from '../../../models/utilisateur';
import {TypeFonctionService} from "../../../services/parametrage/type-fonction.service";
import {ListeUtilisateursService} from "../../../services/utilisateur/liste-utilisateurs.service";

@Component({
  selector: 'app-modifier-fonction',
  templateUrl: './modifier-fonction.component.html',
  styleUrls: ['./modifier-fonction.component.css']
})
export class ModifierFonctionComponent implements OnInit {

  private idFonction: number;
  fonction: Fonction = new Fonction();
  public typeFonction: TypeFonction[] = [];
  public utilisateurs: Utilisateur[] = [];
  constructor(private fonctionService: FonctionService, private typeFonctionService: TypeFonctionService, private listeUtilisateursService: ListeUtilisateursService, private router: Router, private activatedRoute: ActivatedRoute ) { }

  async ngOnInit() {
    this.typeFonctionService.afficherTypeFonctionsAsync().then(type => {
      this.typeFonction = type;
      console.log(type); });
    this.listeUtilisateursService.afficherUtilisateursAsync().then(user => {
      this.utilisateurs = user;
      console.log(user); });
    this.idFonction = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(this.activatedRoute.snapshot.paramMap.get('id'));
    this.fonction = await this.fonctionService.afficherDetailFonctionAsync(this.idFonction);
  }

  async updateFonction(idFonction, fonction) {
    await this.fonctionService.updateFonction(idFonction, fonction).then( e => this.router.navigateByUrl('/function/all') );
  }

}
