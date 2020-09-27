import { Component, OnInit } from '@angular/core';
import {CategorieService} from '../../../services/parametrage/categorie.service';
import {Router} from '@angular/router';
import {Categorie} from '../../../models/categorie';

@Component({
  selector: 'app-ajouter-categorie',
  templateUrl: './ajouter-categorie.component.html',
  styleUrls: ['./ajouter-categorie.component.css']
})
export class AjouterCategorieComponent implements OnInit {

  constructor(private categorieService: CategorieService, private router: Router) { }
  public categorie: Categorie = null;

  ngOnInit(): void {
    this.categorie = new Categorie();
  }

  async CreerCategory() {
    await this.categorieService.ajouterCategorieAsync(this.categorie).then( e => this.router.navigateByUrl('/category/all') );
}

}
