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
import {Instruction} from '../../models/Instruction';
import {FormationService} from '../../services/activiteFormation/formation.service';

@Component({
  selector: 'app-afficher-simulateur',
  templateUrl: './afficher-simulateur.component.html',
  styleUrls: ['./afficher-simulateur.component.css']
})
export class AfficherSimulateurComponent implements OnInit {

  constructor(private formationService: FormationService, private simulateurService: SimulateurService, private router: Router, private populationService: PopulationService, private typeFormationService: TypeFormationService, private natureFormationService: NatureFormationService, private listeUtilisateursService: ListeUtilisateursService, private syllabusService: SyllabusService, private  typeSimulateurService: TypeSimulateurService, private activatedRoute: ActivatedRoute) { }
  private idSimulateur: number;
  activiteFormation: ActiviteFormation = new ActiviteFormation();
  public instructionsByAct: Instruction[] = [];


  async ngOnInit() {
    this.idSimulateur = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(this.idSimulateur);

    this.formationService.afficherInstructionByFormation(this.idSimulateur).then( instruction => {
      this.instructionsByAct = instruction;
      console.log(instruction); });
    console.log(this.instructionsByAct);

    this.activiteFormation = await this.simulateurService.afficherDetailSimulateurAsync(this.idSimulateur);


  }


  editSimulateur(idSimulateur: number) {
    this.router.navigateByUrl('/simulator/edit/' + idSimulateur);
  }

  showDetailUtilisateur(idUtilisateur: number) {
    this.router.navigateByUrl('/user/show/' + idUtilisateur);
  }

  showDetailParametrageEcheance(idParametrageEcheance: number) {
    this.router.navigateByUrl('/deadlineSetting/show/' + idParametrageEcheance);
  }

  addInstruction(idActiviteFormation: number) {
    this.router.navigateByUrl('/simulator/addInstruction/' + idActiviteFormation);
  }
  showDetailSyllabus(idSyllabus: number) {
    this.router.navigateByUrl('/syllabus/show/' + idSyllabus);
  }

}