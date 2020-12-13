import { Component, OnInit } from '@angular/core';
import {TypeFonctionService} from '../../../services/parametrage/type-fonction.service';
import {Router} from '@angular/router';
import {TypeFonction} from '../../../models/typeFonction';
import {Utilisateur} from "../../../models/utilisateur";

@Component({
  selector: 'app-ajouter-type-fonction',
  templateUrl: './ajouter-type-fonction.component.html',
  styleUrls: ['./ajouter-type-fonction.component.css']
})
export class AjouterTypeFonctionComponent implements OnInit {

  constructor(private typeFonctionService: TypeFonctionService, private router: Router) { }
  public typeFonction: TypeFonction = null;
  token: string;
  userConnected: Utilisateur;

  ngOnInit(): void {
    this.token = localStorage.getItem('id_token');
    this.userConnected = JSON.parse(localStorage.getItem('user'));
    if (this.userConnected.role.role === 'Administrateur') {

      this.typeFonction = new TypeFonction();
  } else {
      this.router.navigateByUrl('/authentication/accessDenied');
}
  }
  async CreerTypeFonction() {
    await this.typeFonctionService.ajouterTypeFonctionAsync(this.typeFonction).then( e => this.router.navigateByUrl('/functionType/all') );
  }
}
