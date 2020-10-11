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
import {SimulateurService} from '../../services/activiteFormation/simulateur.service';
import {SeanceSimulateur} from '../../models/seanceSimulateur';
import {SyllabusService} from '../../services/syllabus/syllabus.service';
import {TypeSimulateurService} from '../../services/parametrage/type-simulateur.service';
import {Syllabus} from '../../models/syllabus';
import {TypeSimulateur} from '../../models/typeSimulateur';

@Component({
  selector: 'app-ajouter-simulateur',
  templateUrl: './ajouter-simulateur.component.html',
  styleUrls: ['./ajouter-simulateur.component.css']
})
export class AjouterSimulateurComponent implements OnInit {

  constructor(private simulateurService: SimulateurService, private router: Router, private populationService: PopulationService, private typeFormationService: TypeFormationService, private natureFormationService: NatureFormationService, private listeUtilisateursService: ListeUtilisateursService, private syllabusService: SyllabusService, private  typeSimulateurService: TypeSimulateurService) { }
  public activiteFormation: ActiviteFormation = null;
  public typeFormations: TypeFormation[] = [];
  public populations: Population[] = [];
  public natureFormations: NatureFormation[] = [];
  public seanceSimulateurs: SeanceSimulateur[] = [];
  public utilisateurs: Utilisateur[] = [];
  public syllabuss: Syllabus[] = [];
  public typeSimulateurs: TypeSimulateur[] = [];
  public instruction: Instruction = null;
  public instructions: Instruction[] = [];

  ngOnInit(): void {
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


    this.syllabusService.afficherSyllabusAsync().then(syllabus => {
      this.syllabuss = syllabus;
      console.log(syllabus); });


    this.typeSimulateurService.afficherTypeSimulateursAsync().then(typeSimulateur => {
      this.typeSimulateurs = typeSimulateur;
      console.log(typeSimulateur); });
    this.activiteFormation.instructions = this.instructions;
    this.activiteFormation.instructions.push(new Instruction());
    // this.activiteFormation.instructions[1].position = 'Instructor';
    // console.log(this.activiteFormation.instructions[1].position);
    this.activiteFormation.instructions.push(new Instruction());

    this.activiteFormation.seanceSimulateurs = this.seanceSimulateurs;

    this.activiteFormation.seanceSimulateurs.push(new SeanceSimulateur());

  }

  async Creer() {
    await this.simulateurService.ajouterSimulateurAsync(this.activiteFormation).then( e => this.router.navigateByUrl('/simulator/all') );
  }
  ajouterSeanceSimulateur() {
    this.activiteFormation.seanceSimulateurs = this.seanceSimulateurs;
    this.activiteFormation.seanceSimulateurs.push(new SeanceSimulateur());

  }
  eliminerSeanceSimulateur(index) {
    this.activiteFormation.seanceSimulateurs.splice(index, 1);

  }
  ajouterInstruction() {
    this.instruction = new Instruction();
    this.activiteFormation.instructions.push(new Instruction());

  }
  eliminerInstruction(index2) {
    this.activiteFormation.instructions.splice(index2, 1);

  }


}
