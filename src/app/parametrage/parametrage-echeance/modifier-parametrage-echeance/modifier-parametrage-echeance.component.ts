import { Component, OnInit } from '@angular/core';
import {ParametrageEcheanceService} from '../../../services/parametrage/parametrage-echeance.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ParametrageEcheance} from '../../../models/parametrageEcheance';
import {Utilisateur} from "../../../models/utilisateur";

@Component({
  selector: 'app-modifier-parametrage-echeance',
  templateUrl: './modifier-parametrage-echeance.component.html',
  styleUrls: ['./modifier-parametrage-echeance.component.css']
})
export class ModifierParametrageEcheanceComponent implements OnInit {

  private idParametrageEcheance: number;
  parametrageEcheance: ParametrageEcheance = new ParametrageEcheance();
  constructor(private parametrageEcheanceService: ParametrageEcheanceService, private router: Router, private activatedRoute: ActivatedRoute ) { }
  token: string;
  userConnected: Utilisateur;


  async ngOnInit() {
    this.token = localStorage.getItem('id_token');
    this.userConnected = JSON.parse(localStorage.getItem('user'));
    this.idParametrageEcheance = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(this.activatedRoute.snapshot.paramMap.get('id'));
    this.parametrageEcheance = await this.parametrageEcheanceService.afficherDetailParametrageEcheanceAsync(this.idParametrageEcheance);
  }

  async updateParametrageEcheance(idParametrageEcheance, parametrageEcheance) {
    await this.parametrageEcheanceService.updateParametrageEcheance(idParametrageEcheance, parametrageEcheance).then( e => this.router.navigateByUrl('/deadlineSetting/all') );
  }

}
