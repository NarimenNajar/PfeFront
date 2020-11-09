import { Component, OnInit } from '@angular/core';
import {FormationService} from '../../services/activiteFormation/formation.service';
import {Router} from '@angular/router';
import {PopulationService} from '../../services/parametrage/population.service';
import {TypeFormationService} from '../../services/parametrage/type-formation.service';
import {NatureFormationService} from '../../services/parametrage/nature-formation.service';
import {ListeUtilisateursService} from '../../services/utilisateur/liste-utilisateurs.service';
import {ActiviteFormation} from '../../models/activiteFormation';
import {TypeFormation} from '../../models/typeFormation';
import {Population} from '../../models/population';
import {NatureFormation} from '../../models/natureFormation';
import {SeanceFormation} from '../../models/seanceFormation';
import {Utilisateur} from '../../models/utilisateur';
import {Instruction} from '../../models/Instruction';

@Component({
  selector: 'app-ajouter-formation-pnc',
  templateUrl: './ajouter-formation-pnc.component.html',
  styleUrls: ['./ajouter-formation-pnc.component.css']
})
export class AjouterFormationPNCComponent implements OnInit {

  constructor(private formationService: FormationService, private router: Router, private populationService: PopulationService, private typeFormationService: TypeFormationService, private natureFormationService: NatureFormationService, private listeUtilisateursService: ListeUtilisateursService) { }
  public activiteFormation: ActiviteFormation = null;
  public typeFormations: TypeFormation[] = [];
  public populations: Population[] = [];
  public natureFormations: NatureFormation[] = [];
  public seanceFormations: SeanceFormation[] = [];
  public utilisateurs: Utilisateur[] = [];
  public instruction: Instruction = null;
  token: string;
  userConnected: Utilisateur;

  ngOnInit(): void {
    this.token = localStorage.getItem('id_token');
    this.userConnected = JSON.parse(localStorage.getItem('user'));
    this.activiteFormation = new ActiviteFormation();

    this.populationService.afficherPopulationAsync().then( population => {
      this.populations = population;
      console.log(population); });

    this.typeFormationService.afficherTypeFormationsAsync().then( typeFormation => {
      this.typeFormations = typeFormation;
      console.log(typeFormation); });

    this.natureFormationService.afficherNatureFormationsAsync().then( natureFormation => {
      this.natureFormations = natureFormation;
      console.log(natureFormation); });

    this.listeUtilisateursService.afficherUtilisateursAsync().then(user => {
      this.utilisateurs = user;
      console.log(user); });

    this.activiteFormation.seanceFormations = this.seanceFormations;

    this.activiteFormation.seanceFormations.push(new SeanceFormation());

  }

  async Creer() {
    await this.formationService.ajouterFormationPNCAsync(this.activiteFormation).then( e => this.router.navigateByUrl('/training/allPNC') );
  }
  ajouterSeanceFormation() {
    this.activiteFormation.seanceFormations = this.seanceFormations;
    this.activiteFormation.seanceFormations.push(new SeanceFormation());

  }
  eliminerSeanceFormation(index) {
    this.activiteFormation.seanceFormations.splice(index, 1);

  }
  ajouterInstruction() {
    this.instruction = new Instruction();
    this.activiteFormation.instructions.push(new Instruction());

  }
  eliminerInstruction(index2) {
    this.activiteFormation.instructions.splice(index2, 1);

  }

}
