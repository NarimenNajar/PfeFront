import { Component, OnInit } from '@angular/core';

import {ActivatedRoute, Router} from '@angular/router';
import {CategorieService} from '../../../services/parametrage/categorie.service';
import {Categorie} from '../../../models/categorie';

@Component({
  selector: 'app-modifier-categorie',
  templateUrl: './modifier-categorie.component.html',
  styleUrls: ['./modifier-categorie.component.css']
})
export class ModifierCategorieComponent implements OnInit {

  private idCategorie: number;
  categorie: Categorie = new Categorie();
  constructor(private categorieService: CategorieService, private router: Router, private activatedRoute: ActivatedRoute ) { }

  async ngOnInit() {
    this.idCategorie = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(this.activatedRoute.snapshot.paramMap.get('id'));
    this.categorie = await this.categorieService.afficherDetailCategorieAsync(this.idCategorie);
  }

  async updateCategorie(idCategorie, categorie) {
    await this.categorieService.updateCategorie(idCategorie, categorie).then( e => this.router.navigateByUrl('/category/all') );
  }

}
