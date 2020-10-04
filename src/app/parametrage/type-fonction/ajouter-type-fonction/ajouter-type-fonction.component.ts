import { Component, OnInit } from '@angular/core';
import {TypeFonctionService} from '../../../services/parametrage/type-fonction.service';
import {Router} from '@angular/router';
import {TypeFonction} from '../../../models/typeFonction';

@Component({
  selector: 'app-ajouter-type-fonction',
  templateUrl: './ajouter-type-fonction.component.html',
  styleUrls: ['./ajouter-type-fonction.component.css']
})
export class AjouterTypeFonctionComponent implements OnInit {

  constructor(private typeFonctionService: TypeFonctionService, private router: Router) { }
  public typeFonction: TypeFonction = null;

  ngOnInit(): void {
    this.typeFonction = new TypeFonction();
  }
  async CreerTypeFonction() {
    await this.typeFonctionService.ajouterTypeFonctionAsync(this.typeFonction).then( e => this.router.navigateByUrl('/functionType/all') );
  }
}
