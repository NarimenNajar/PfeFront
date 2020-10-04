import { Component, OnInit } from '@angular/core';
import {ParametrageEcheanceService} from '../../../services/parametrage/parametrage-echeance.service';
import {RouteConfigLoadEnd, Router} from '@angular/router';
import {ParametrageEcheance} from '../../../models/parametrageEcheance';

@Component({
  selector: 'app-ajouter-parametrage-echeance',
  templateUrl: './ajouter-parametrage-echeance.component.html',
  styleUrls: ['./ajouter-parametrage-echeance.component.css']
})
export class AjouterParametrageEcheanceComponent implements OnInit {

  constructor(private parametrageEcheanceService: ParametrageEcheanceService, private router: Router) { }
  public parametrageEcheance: ParametrageEcheance = null;

  ngOnInit(): void {
    this.parametrageEcheance = new ParametrageEcheance();
  }
  async CreerParametrageEcheance() {
    await this.parametrageEcheanceService.ajouterParametrageEcheanceAsync(this.parametrageEcheance).then( e => this.router.navigateByUrl('/deadlineSetting/all') );
  }
}
