import { Component, OnInit } from '@angular/core';
import {PopulationService} from '../../../services/parametrage/population.service';
import {Router} from '@angular/router';
import {Population} from '../../../models/population';

@Component({
  selector: 'app-ajouter-population',
  templateUrl: './ajouter-population.component.html',
  styleUrls: ['./ajouter-population.component.css']
})
export class AjouterPopulationComponent implements OnInit {

  constructor(private populationService: PopulationService, private router: Router) { }
  public population: Population = null;


  ngOnInit(): void {
    this.population = new Population();
  }

  async CreerPopulation() {
    await this.populationService.ajouterPopulationAsync(this.population).then( e => this.router.navigateByUrl('/population/all') );
  }
}
