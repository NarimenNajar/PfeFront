import { Component, OnInit } from '@angular/core';
import {SyllabusService} from '../../services/syllabus/syllabus.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Syllabus} from '../../models/syllabus';
import {Exercice} from '../../models/exercice';
import {Description} from '../../models/description';
import {Competence} from '../../models/competence';
import {Partie} from '../../models/partie';
import {Detail} from '../../models/detail';
import {Tache} from '../../models/tache';
import {Utilisateur} from "../../models/utilisateur";

@Component({
  selector: 'app-modifier-syllabus',
  templateUrl: './modifier-syllabus.component.html',
  styleUrls: ['./modifier-syllabus.component.css']
})
export class ModifierSyllabusComponent implements OnInit {

  constructor( private syllabusService: SyllabusService, private router: Router , private activatedRoute: ActivatedRoute) { }
  syllabus: Syllabus = new Syllabus();
  private idSyllabus: number;
  token: string;
  userConnected: Utilisateur;



  async ngOnInit() {
    this.token = localStorage.getItem('id_token');
    this.userConnected = JSON.parse(localStorage.getItem('user'));
    this.idSyllabus = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(this.activatedRoute.snapshot.paramMap.get('id'));
    this.syllabus = await this.syllabusService.afficherDetailSyllabusAsync(this.idSyllabus);
  }

  async updateSyllabus(idSyllabus, syllabus) {
    await this.syllabusService.updateSyllabus(idSyllabus, syllabus).then( e => this.router.navigateByUrl('/syllabus/all') );
  }
  ajouterExercice() {
    this.syllabus.exercices.push(new Exercice());
  }
 /* eliminerExercise(index) {
    this.syllabus.exercices.splice(index, 1);
  }*/
  async eliminerExercise(id) {
    await this.syllabusService.deleteExerciceAsync(id).then(e => console.log(id));
  }
  ajouterDescription() {
    this.syllabus.descriptions.push(new Description());
  }
  eliminerDescription(id) {
     this.syllabusService.deleteDescriptionAsync(id).then(e => console.log(id));
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
