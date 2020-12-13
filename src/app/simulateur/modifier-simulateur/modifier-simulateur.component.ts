import { Component, OnInit } from '@angular/core';
import {SimulateurService} from '../../services/activiteFormation/simulateur.service';
import {ActivatedRoute, Router} from '@angular/router';
import {PopulationService} from '../../services/parametrage/population.service';
import {TypeFormationService} from '../../services/parametrage/type-formation.service';
import {NatureFormationService} from '../../services/parametrage/nature-formation.service';
import {ListeUtilisateursService} from '../../services/utilisateur/liste-utilisateurs.service';
import {SyllabusService} from '../../services/syllabus/syllabus.service';
import {TypeSimulateurService} from '../../services/parametrage/type-simulateur.service';
import {ActiviteFormation} from '../../models/activiteFormation';
import {TypeFormation} from '../../models/typeFormation';
import {Population} from '../../models/population';
import {NatureFormation} from '../../models/natureFormation';
import {SeanceSimulateur} from '../../models/seanceSimulateur';
import {Utilisateur} from '../../models/utilisateur';
import {Syllabus} from '../../models/syllabus';
import {TypeSimulateur} from '../../models/typeSimulateur';
import {Instruction} from '../../models/Instruction';
import {SeanceFormation} from '../../models/seanceFormation';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modifier-simulateur',
  templateUrl: './modifier-simulateur.component.html',
  styleUrls: ['./modifier-simulateur.component.css']
})
export class ModifierSimulateurComponent implements OnInit {

  constructor(private simulateurService: SimulateurService, private router: Router, private populationService: PopulationService, private typeFormationService: TypeFormationService, private natureFormationService: NatureFormationService, private listeUtilisateursService: ListeUtilisateursService, private syllabusService: SyllabusService, private  typeSimulateurService: TypeSimulateurService, private activatedRoute: ActivatedRoute) { }
  public activiteFormation: ActiviteFormation = null;
  public typeFormations: TypeFormation[] = [];
  public populations: Population[] = [];
  public natureFormations: NatureFormation[] = [];
  public seanceSimulateurs: SeanceSimulateur[] = [];
  public utilisateurs: Utilisateur[] = [];
  public syllabuss: Syllabus[] = [];
  public typeSimulateurs: TypeSimulateur[] = [];
  public instruction: Instruction = null;
  public instructionsByAct: Instruction[] = [];
  public instructions: Instruction[] = [];
  public idFormation: number;

  token: string;
  userConnected: Utilisateur;




  async ngOnInit() {

    this.token = localStorage.getItem('id_token');
    this.userConnected = JSON.parse(localStorage.getItem('user'));
    this.idFormation = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(this.idFormation);
    if (this.userConnected.role.role === 'Responsable Formation PNT' ||  this.userConnected.role.role === 'Agent Administratif Formation PNT') {

    this.simulateurService.afficherInstructionByFormation(this.idFormation).then( instruction => {
      this.instructionsByAct = instruction;
      console.log(instruction); });
    console.log(this.instructionsByAct);
    this.activiteFormation = await this.simulateurService.afficherDetailSimulateurAsync(this.idFormation);


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

    //  this.activiteFormation.seanceFormations = this.seanceFormations;

  } else {
      this.router.navigateByUrl('/authentication/accessDenied');
}
  }

  async updateFormation(idFormation, activiteFormation) {
    await this.simulateurService.updateSimulateur(idFormation, activiteFormation).then( e => this.router.navigateByUrl('/simulator/show/' + idFormation) );
  }

  ajouterSeanceFormation() {
    this.activiteFormation.seanceSimulateurs = this.seanceSimulateurs;
    this.activiteFormation.seanceSimulateurs.push(new SeanceSimulateur());

  }
  async  eliminerSeanceSimulateur(index, idSeanceFormation: number) {
    // this.activiteFormation.seanceFormations.splice(index, 1);
    // this.formationService.deleteSeanceFormationAsync(idSeanceFormation);

    console.log(idSeanceFormation);
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        await this.simulateurService.deleteSeanceSimulateurAsync(idSeanceFormation);
        Swal.fire(
          'Deleted!',
          'Session has been deleted.',
          'success'
        ).then((e) =>  this.activiteFormation.seanceSimulateurs.splice(index, 1) );
      }
    });


  }
  ajouterInstruction() {
    // this.instruction = new Instruction();
    this.activiteFormation.instructions = this.instructions;
    this.activiteFormation.instructions.push(new Instruction());

    // this.instructionsByAct.push(new Instruction());

  }
  async eliminerInstruction(index2, idActiviteFormation: number, idUtilisateur: number) {
    //  this.activiteFormation.instructions.splice(index2, 1);
    // this.formationService.deleteInstructionByActiviteFormationAndUserAsync(idActiviteFormation, idUtilisateur);

    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        await  this.simulateurService.deleteInstructionByActiviteFormationAndUserAsync(idActiviteFormation, idUtilisateur);

        Swal.fire(
          'Deleted!',
          'Instruction has been deleted.',
          'success'
        ).then((e) =>  this.activiteFormation.instructions.splice(index2, 1) );
      }
    });


  }

  async eliminerInstruction2(index2) {
    this.activiteFormation.instructions.splice(index2, 1);
  }

}
