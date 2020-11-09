import { Component, OnInit } from '@angular/core';
import {ParametrageEcheanceService} from "../../../services/parametrage/parametrage-echeance.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ParametrageEcheance} from "../../../models/parametrageEcheance";
import {Utilisateur} from "../../../models/utilisateur";

@Component({
  selector: 'app-afficher-parametrage-echeance',
  templateUrl: './afficher-parametrage-echeance.component.html',
  styleUrls: ['./afficher-parametrage-echeance.component.css']
})
export class AfficherParametrageEcheanceComponent implements OnInit {

  constructor(private parametrageEcheanceService: ParametrageEcheanceService, private router: Router, private activatedRoute: ActivatedRoute) { }
  private idParametrageEcheance: number;
  parametrageEcheance: ParametrageEcheance = new ParametrageEcheance();
  token: string;
  userConnected: Utilisateur;


  async ngOnInit() {
    this.token = localStorage.getItem('id_token');
    this.userConnected = JSON.parse(localStorage.getItem('user'));
    this.idParametrageEcheance = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(this.activatedRoute.snapshot.paramMap.get('id'));
    this.parametrageEcheance = await this.parametrageEcheanceService.afficherDetailParametrageEcheanceAsync(this.idParametrageEcheance);
  }


}
