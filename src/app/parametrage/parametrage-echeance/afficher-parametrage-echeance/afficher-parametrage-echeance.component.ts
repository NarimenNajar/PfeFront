import { Component, OnInit } from '@angular/core';
import {ParametrageEcheanceService} from "../../../services/parametrage/parametrage-echeance.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ParametrageEcheance} from "../../../models/parametrageEcheance";

@Component({
  selector: 'app-afficher-parametrage-echeance',
  templateUrl: './afficher-parametrage-echeance.component.html',
  styleUrls: ['./afficher-parametrage-echeance.component.css']
})
export class AfficherParametrageEcheanceComponent implements OnInit {

  constructor(private parametrageEcheanceService: ParametrageEcheanceService, private router: Router, private activatedRoute: ActivatedRoute) { }
  private idParametrageEcheance: number;
  parametrageEcheance: ParametrageEcheance = new ParametrageEcheance();


  async ngOnInit() {
    this.idParametrageEcheance = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(this.activatedRoute.snapshot.paramMap.get('id'));
    this.parametrageEcheance = await this.parametrageEcheanceService.afficherDetailParametrageEcheanceAsync(this.idParametrageEcheance);
  }


}
