import { Component, OnInit } from '@angular/core';
import {FonctionService} from '../../../services/parametrage/fonction.service';
import {Router} from '@angular/router';
import {Fonction} from '../../../models/fonction';
import {TypeFonction} from '../../../models/typeFonction';
import {TypeFonctionService} from '../../../services/parametrage/type-fonction.service';
import {ListeUtilisateursService} from "../../../services/utilisateur/liste-utilisateurs.service";
import {Utilisateur} from "../../../models/utilisateur";

@Component({
  selector: 'app-ajouter-fonction',
  templateUrl: './ajouter-fonction.component.html',
  styleUrls: ['./ajouter-fonction.component.css']
})
export class AjouterFonctionComponent implements OnInit {

  constructor(private fonctionService: FonctionService, private router: Router, private typeFonctionService: TypeFonctionService, private listeUtilisateursService: ListeUtilisateursService) { }
  public fonction: Fonction = null;
  public typeFonction: TypeFonction[] = [];
  public utilisateurs: Utilisateur[] = [];
  token: string;
  userConnected: Utilisateur;


  ngOnInit(): void {
    this.token = localStorage.getItem('id_token');
    this.userConnected = JSON.parse(localStorage.getItem('user'));
    this.fonction = new Fonction();
    this.typeFonctionService.afficherTypeFonctionsAsync().then(type => {
      this.typeFonction = type;
      console.log(type); });
    this.listeUtilisateursService.afficherUtilisateursAsync().then(user => {
      this.utilisateurs = user;
      console.log(user); });
  }
  async CreerFonction() {
    await this.fonctionService.ajouterFonctionAsync(this.fonction).then( e => this.router.navigateByUrl('/function/all') );
  }
}
