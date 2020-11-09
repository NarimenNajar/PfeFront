import { Component, OnInit } from '@angular/core';
import {Syllabus} from '../../models/syllabus';
import {SeanceSimulateur} from '../../models/seanceSimulateur';
import {Note} from '../../models/note';
import {Level} from '../../models/level';
import {Utilisateur} from '../../models/utilisateur';
import {ActiviteFormation} from '../../models/activiteFormation';
import {Instruction} from '../../models/Instruction';
import {SyllabusService} from '../../services/syllabus/syllabus.service';
import {SimulateurService} from '../../services/activiteFormation/simulateur.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-validation-trainee-simulateur',
  templateUrl: './validation-trainee-simulateur.component.html',
  styleUrls: ['./validation-trainee-simulateur.component.css']
})
export class ValidationTraineeSimulateurComponent implements OnInit {

  public idSyllabus: number;
  syllabus: Syllabus = new Syllabus();
  public idSeanceSimulateur: number;
  seanceSimulateur: SeanceSimulateur = new SeanceSimulateur();
  public notes: Note[] = [];
  public levels: Level[] = [];
  public test: string;
  public lev: string;
  public no: number;
  public user: Utilisateur = new Utilisateur();
  public userT: Utilisateur = new Utilisateur();
  public simulateur: ActiviteFormation = new ActiviteFormation();
  public instruction: Instruction = new Instruction();
  public instructionT: Instruction = new Instruction();
  token: string;
  userConnected: Utilisateur;


  constructor(private syllabusService: SyllabusService, private simulateurService: SimulateurService, private router: Router, private activatedRoute: ActivatedRoute) { }

  async ngOnInit() {
    this.token = localStorage.getItem('id_token');
    this.userConnected = JSON.parse(localStorage.getItem('user'));
    this.idSeanceSimulateur = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(this.idSeanceSimulateur);

    this.simulateurService.afficherNotesBySeanceSimulateur(this.idSeanceSimulateur).then( note => {
      this.notes = note;
      console.log(note); });

    this.levels = await this.simulateurService.afficherLevelsBySeanceSimulateur(this.idSeanceSimulateur);
    this.notes = await this.simulateurService.afficherNotesBySeanceSimulateur(this.idSeanceSimulateur);

    // await this.syllabusService.afficherDetailSyllabusAsync(this.idSyllabus).then((syllabus) => console.log(syllabus));
    this.seanceSimulateur = await this.simulateurService.afficherDetailSeanceSimulateurAsync(this.idSeanceSimulateur);
    // this.seanceSimulateur.syllabus.competences.forEach( competence => {competence.notes = this.notes; console.log(competence.id); });
    // this.seanceSimulateur.syllabus.parties.forEach( partie => partie.taches.forEach( tache => {tache.levels = this.levels; console.log(tache.id); }));
    console.log(this.seanceSimulateur);

    this.idSyllabus = this.seanceSimulateur.syllabus.id;
    console.log(this.idSyllabus);
    this.syllabus = await this.syllabusService.afficherDetailSyllabusAsync(this.idSyllabus);
    this.simulateur = await this.simulateurService.getSimulateurBySeanceSimulateur(this.idSeanceSimulateur);
    console.log(this.simulateur);
    this.instruction = await this.simulateurService.afficherSimulateurInstructor(this.simulateur.id);

    this.user = this.instruction.utilisateur;
    console.log(this.user.id);

    this.instructionT = await this.simulateurService.afficherSimulateurTrainee(this.simulateur.id);

    this.userT = this.instructionT.utilisateur;
    console.log(this.userT.id);
  }

  getRadioValue(seanceSimulateurId, tacheId) {


    if (this.levels.find(level => level.tache.id === tacheId) !== undefined) {
      return  this.lev = this.levels.find(level => level.tache.id === tacheId).level;
    } else {
      return 'x'; }
  }


  getRadioValueNote(seanceSimulateurId, competenceId) {
    if (this.notes.find(note => note.competence.id === competenceId) !== undefined) {
      return  this.no = this.notes.find(note => note.competence.id === competenceId).note;
    } else {
      return 10000; }
  }

  valider() {
    this.seanceSimulateur.simulateur = this.simulateur;
    this.simulateurService.validerSimulateurTrainee(this.idSeanceSimulateur, this.seanceSimulateur);
    this.router.navigateByUrl('/simulator/show/validate/trainee/' + this.idSeanceSimulateur);

  }
  reclamer() {
    this.seanceSimulateur.simulateur = this.simulateur;
    this.simulateurService.reclamerSimulateurTrainee(this.idSeanceSimulateur, this.seanceSimulateur);
    this.router.navigateByUrl('/simulator/show/validate/trainee/' + this.idSeanceSimulateur);

  }



}
