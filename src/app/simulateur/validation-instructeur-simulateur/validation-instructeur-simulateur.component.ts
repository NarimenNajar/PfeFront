import { Component, OnInit } from '@angular/core';
import {Syllabus} from '../../models/syllabus';
import {SyllabusService} from '../../services/syllabus/syllabus.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SeanceSimulateur} from '../../models/seanceSimulateur';
import {SimulateurService} from '../../services/activiteFormation/simulateur.service';
import {Note} from '../../models/note';
import {Level} from '../../models/level';

@Component({
  selector: 'app-validation-instructeur-simulateur',
  templateUrl: './validation-instructeur-simulateur.component.html',
  styleUrls: ['./validation-instructeur-simulateur.component.css']
})
export class ValidationInstructeurSimulateurComponent implements OnInit {

  public idSyllabus: number;
  syllabus: Syllabus = new Syllabus();
  public idSeanceSimulateur: number;
  seanceSimulateur: SeanceSimulateur = new SeanceSimulateur();
  public notes: Note[] = [];
  public levels: Level[] = [];
  constructor(private syllabusService: SyllabusService, private simulateurService: SimulateurService, private router: Router, private activatedRoute: ActivatedRoute) { }

  async ngOnInit() {
    this.idSeanceSimulateur = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(this.idSeanceSimulateur);

    this.simulateurService.afficherNotesBySeanceSimulateur(this.idSeanceSimulateur).then( note => {
      this.notes = note;
      console.log(note); });

    this.simulateurService.afficherLevelsBySeanceSimulateur(this.idSeanceSimulateur).then( level => {
      this.levels = level;
      console.log(level); });

    // await this.syllabusService.afficherDetailSyllabusAsync(this.idSyllabus).then((syllabus) => console.log(syllabus));
    this.seanceSimulateur = await this.simulateurService.afficherDetailSeanceSimulateurAsync(this.idSeanceSimulateur);
    // this.seanceSimulateur.syllabus.competences.forEach( competence => {competence.notes = this.notes; console.log(competence.id); });
    // this.seanceSimulateur.syllabus.parties.forEach( partie => partie.taches.forEach( tache => {tache.levels = this.levels; console.log(tache.id); }));


    this.idSyllabus = this.seanceSimulateur.syllabus.id;
    console.log(this.idSyllabus);
    this.syllabus = await this.syllabusService.afficherDetailSyllabusAsync(this.idSyllabus);
  }
}
