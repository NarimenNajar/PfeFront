import { Component, OnInit } from '@angular/core';
import {TypeFonctionService} from '../../../services/parametrage/type-fonction.service';
import {ActivatedRoute, Router} from '@angular/router';
import {TypeFonction} from '../../../models/typeFonction';

@Component({
  selector: 'app-modifier-type-fonction',
  templateUrl: './modifier-type-fonction.component.html',
  styleUrls: ['./modifier-type-fonction.component.css']
})
export class ModifierTypeFonctionComponent implements OnInit {

  private idTypeFonction: number;
  typeFonction: TypeFonction = new TypeFonction();
  constructor(private typeFonctionService: TypeFonctionService, private router: Router, private activatedRoute: ActivatedRoute ) { }

  async ngOnInit() {
    this.idTypeFonction = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(this.activatedRoute.snapshot.paramMap.get('id'));
    this.typeFonction = await this.typeFonctionService.afficherDetailTypeFonctionAsync(this.idTypeFonction);
  }

  async updateTypeFonction(idTypeFonction, typeFonction) {
    await this.typeFonctionService.updateTypeFonction(idTypeFonction, typeFonction).then( e => this.router.navigateByUrl('/functionType/all') );
  }


}
