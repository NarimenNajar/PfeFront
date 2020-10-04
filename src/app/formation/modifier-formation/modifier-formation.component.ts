import { Component, OnInit } from '@angular/core';
import {FormationService} from '../../services/activiteFormation/formation.service';
import {ActivatedRoute, Router} from '@angular/router';
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
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modifier-formation',
  templateUrl: './modifier-formation.component.html',
  styleUrls: ['./modifier-formation.component.css']
})
export class ModifierFormationComponent implements OnInit {

  constructor(private formationService: FormationService, private router: Router, private populationService: PopulationService, private typeFormationService: TypeFormationService, private natureFormationService: NatureFormationService, private listeUtilisateursService: ListeUtilisateursService, private activatedRoute: ActivatedRoute) { }

  public activiteFormation: ActiviteFormation = null ;
  public typeFormations: TypeFormation[] = [];
  public populations: Population[] = [];
  public natureFormations: NatureFormation[] = [];
  public seanceFormations: SeanceFormation[] = [];
  public utilisateurs: Utilisateur[] = [];
  public instructionsByAct: Instruction[] = [];
  public idFormation: number;
  public instruction: Instruction = null;



  async ngOnInit() {

    this.idFormation = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(this.idFormation);

    this.formationService.afficherInstructionByFormation(this.idFormation).then( instruction => {
      this.instructionsByAct = instruction;
      console.log(instruction); });
    console.log(this.instructionsByAct);
    this.activiteFormation = await this.formationService.afficherDetailFormationAsync(this.idFormation);


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


  }

  async updateFormation(idFormation, activiteFormation) {
    await this.formationService.updateFormation(idFormation, activiteFormation).then( e => this.router.navigateByUrl('/training/show/' + idFormation) );
  }

  ajouterSeanceFormation() {
    this.activiteFormation.seanceFormations = this.seanceFormations;
    this.activiteFormation.seanceFormations.push(new SeanceFormation());

  }
  async  eliminerSeanceFormation(index, idSeanceFormation: number) {
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
        await this.formationService.deleteSeanceFormationAsync(idSeanceFormation);
        Swal.fire(
          'Deleted!',
          'SessionTraining has been deleted.',
          'success'
        ).then((e) =>  this.activiteFormation.seanceFormations.splice(index, 1) );
      }
    });


  }
  ajouterInstruction() {
    this.instruction = new Instruction();
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
        await  this.formationService.deleteInstructionByActiviteFormationAndUserAsync(idActiviteFormation, idUtilisateur);

        Swal.fire(
          'Deleted!',
          'SessionTraining has been deleted.',
          'success'
        ).then((e) =>  this.activiteFormation.instructions.splice(index2, 1) );
      }
    });


  }


}
