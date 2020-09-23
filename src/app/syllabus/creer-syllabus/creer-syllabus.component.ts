import { Component, OnInit } from '@angular/core';
import {SyllabusService} from '../../services/syllabus/syllabus.service';
import {Syllabus} from '../../models/syllabus';
import {Exercice} from '../../models/exercice';
import {Description} from '../../models/description';
import {Competence} from '../../models/competence';
import {Partie} from '../../models/partie';
import {Detail} from '../../models/detail';
import {Tache} from '../../models/tache';
import {Router} from '@angular/router';

@Component({
  selector: 'app-creer-syllabus',
  templateUrl: './creer-syllabus.component.html',
  styleUrls: ['./creer-syllabus.component.css']
})
export class CreerSyllabusComponent implements OnInit {

  constructor(private syllabusService: SyllabusService, private router: Router) { }
  public syllabus: Syllabus = null;

  ngOnInit(): void {
  this.syllabus = new Syllabus();
  }

  async Creer() {
    await this.syllabusService.creerSyllabusAsync(this.syllabus).then( e => this.router.navigateByUrl('/syllabus/all') );
  }
  ajouterExercice() {
    this.syllabus.exercices.push(new Exercice());
  }
  eliminerExercise(index) {
    this.syllabus.exercices.splice(index, 1);
  }
  ajouterDescription() {
    this.syllabus.descriptions.push(new Description());
  }
  eliminerDescription(index2) {
    this.syllabus.descriptions.splice(index2, 1);
  }
  ajouterCompetence() {
    this.syllabus.competences.push(new Competence());
  }
  eliminerCompetence(index3) {
    this.syllabus.competences.splice(index3, 1);
  }
  ajouterPartie() {
    this.syllabus.parties.push(new Partie());
  }
  eliminerPartie(index4) {
    this.syllabus.parties.splice(index4, 1);
  }
  ajouterDetailDescription(description: Description) {
    description.details.push(new Detail());
  }
  eliminerDetailDescription(description: Description, index5) {
    description.details.splice(index5, 1);

  }
  ajouterTachePartie(partie: Partie) {
    partie.taches.push(new Tache());
  }
  eliminerTachePartie(partie: Partie, index6) {
    partie.taches.splice(index6, 1);

  }
}
