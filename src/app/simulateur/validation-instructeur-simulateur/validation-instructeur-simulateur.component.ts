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
  public test: string;
  constructor(private syllabusService: SyllabusService, private simulateurService: SimulateurService, private router: Router, private activatedRoute: ActivatedRoute) { }

  async ngOnInit() {
    this.idSeanceSimulateur = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(this.idSeanceSimulateur);

    this.simulateurService.afficherNotesBySeanceSimulateur(this.idSeanceSimulateur).then( note => {
      this.notes = note;
      console.log(note); });

   /* this.simulateurService.afficherLevelsBySeanceSimulateur(this.idSeanceSimulateur).then( level => {
      this.levels = level;
      console.log(level); }); */

    // await this.syllabusService.afficherDetailSyllabusAsync(this.idSyllabus).then((syllabus) => console.log(syllabus));
    this.seanceSimulateur = await this.simulateurService.afficherDetailSeanceSimulateurAsync(this.idSeanceSimulateur);
    console.log(this.syllabus);
    // this.seanceSimulateur.syllabus.competences.forEach( competence => {competence.notes = this.notes; console.log(competence.id); });
    // this.seanceSimulateur.syllabus.parties.forEach( partie => partie.taches.forEach( tache => {tache.levels = this.levels; console.log(tache.id); }));


    this.idSyllabus = this.seanceSimulateur.syllabus.id;
    console.log(this.idSyllabus);
    this.syllabus = await this.syllabusService.afficherDetailSyllabusAsync(this.idSyllabus);
  }

  getRadioValue(seanceSimulateurId, tacheId, $event) {
    console.log(this.test);
    console.log($event);
    console.log(seanceSimulateurId);
    console.log(tacheId);
    const newLevel = new Level();
    newLevel.level = $event;
    newLevel.seanceSimulateur = this.seanceSimulateur;
    let tacheSelectionee = null;
    this.syllabus.parties.map(partie => {
      if (partie.taches.find(tache => tache.id === tacheId) !== undefined) {
        tacheSelectionee = partie.taches.find(tache => tache.id === tacheId);
        console.log(tacheSelectionee); }
    });
    newLevel.tache = tacheSelectionee;
    if (this.levels.find(level => level.tache === tacheId) !== undefined) {
      this.levels.find(level => level.tache === tacheId).level = $event;
    } else {
      this.levels.push(newLevel);
    }
    console.log(this.levels);
  }


  getRadioValueNote(seanceSimulateurId, competenceId, $event) {
    console.log(this.test);
    console.log($event);
    console.log(seanceSimulateurId);
    console.log(competenceId);
    const newNote = new Note();
    newNote.note = $event;
    newNote.seanceSimulateur = this.seanceSimulateur;
    let competenceSelectionee = null;
    if (this.syllabus.competences.find(competence => competence.id === competenceId) !== undefined) {
        competenceSelectionee = this.syllabus.competences.find(competence => competence.id === competenceId);
        console.log(competenceSelectionee); }
    newNote.competence = competenceSelectionee;
    if (this.notes.find(note => note.competence.id === competenceId) !== undefined) {
      this.notes.find(note => note.competence.id === competenceId).note = $event;
    } else {
      this.notes.push(newNote);
    }
    console.log(this.notes);
  }

  valider() {
    this.test = 'hhhh';
    this.levels.map(level => {console.log(level.level); level.tache.levels = [];
                              console.log(this.test); this.simulateurService.ajouterLevelAsync(level, level.seanceSimulateur.id, level.tache.id);
                               });
    this.notes.map(note => {console.log(note.note); note.competence.notes = [];
                            console.log(this.test); this.simulateurService.ajouterNoteAsync(note, note.seanceSimulateur.id, note.competence.id);
                               });
    this.simulateurService.validerSimulateurInstructor(this.idSeanceSimulateur, this.seanceSimulateur);
  this.router.navigateByUrl('/simulator/all');
  }
}
