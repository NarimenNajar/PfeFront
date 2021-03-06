import { Component, OnInit } from '@angular/core';
import {Population} from "../../../models/population";
import {PopulationService} from "../../../services/parametrage/population.service";
import {SystemeExterneService} from "../../../services/parametrage/systeme-externe.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Utilisateur} from "../../../models/utilisateur";

@Component({
  selector: 'app-modifier-population',
  templateUrl: './modifier-population.component.html',
  styleUrls: ['./modifier-population.component.css']
})
export class ModifierPopulationComponent implements OnInit {

  private idPopulation: number;
  population: Population = new Population();
  constructor(private populationService: PopulationService, private router: Router, private activatedRoute: ActivatedRoute ) { }
  token: string;
  userConnected: Utilisateur;

  async ngOnInit() {
    this.token = localStorage.getItem('id_token');
    this.userConnected = JSON.parse(localStorage.getItem('user'));
    this.idPopulation = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(this.activatedRoute.snapshot.paramMap.get('id'));
    if (this.userConnected.role.role === 'Administrateur') {

      this.population = await this.populationService.afficherDetailPopulationAsync(this.idPopulation);
    } else {
      this.router.navigateByUrl('/authentication/accessDenied');
    }
  }

  async updatePopulation(idPopulation, population) {
    await this.populationService.updatePopulation(idPopulation, population).then( e => this.router.navigateByUrl('/population/all') );
  }

}
