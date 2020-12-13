import { Component, OnInit } from '@angular/core';
import {CategorieService} from '../../../services/parametrage/categorie.service';
import {Router} from '@angular/router';
import {Categorie} from '../../../models/categorie';
import {Utilisateur} from "../../../models/utilisateur";

@Component({
  selector: 'app-ajouter-categorie',
  templateUrl: './ajouter-categorie.component.html',
  styleUrls: ['./ajouter-categorie.component.css']
})
export class AjouterCategorieComponent implements OnInit {

  constructor(private categorieService: CategorieService, private router: Router) { }
  public categorie: Categorie = null;
  token: string;
  userConnected: Utilisateur;

  ngOnInit(): void {
    this.token = localStorage.getItem('id_token');
    this.userConnected = JSON.parse(localStorage.getItem('user'));
    if (this.userConnected.role.role === 'Administrateur') {

      this.categorie = new Categorie();
  } else {
      this.router.navigateByUrl('/authentication/accessDenied');
}
  }

  async CreerCategory() {
    await this.categorieService.ajouterCategorieAsync(this.categorie).then( e => this.router.navigateByUrl('/category/all') );
}

}
