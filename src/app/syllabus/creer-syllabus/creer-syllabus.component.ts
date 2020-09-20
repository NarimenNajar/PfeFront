import { Component, OnInit } from '@angular/core';
import {SyllabusService} from '../../services/syllabus/syllabus.service';
import {Syllabus} from '../../models/syllabus';
import {Exercice} from '../../models/exercice';

@Component({
  selector: 'app-creer-syllabus',
  templateUrl: './creer-syllabus.component.html',
  styleUrls: ['./creer-syllabus.component.css']
})
export class CreerSyllabusComponent implements OnInit {

  constructor(private syllabusService: SyllabusService) { }
  public syllabus: Syllabus = null;

  ngOnInit(): void {
  this.syllabus = new Syllabus();
  }

  async Creer() {
    await this.syllabusService.creerSyllabusAsync(this.syllabus);
  }
  ajouterExercice() {
    this.syllabus.exercices.push(new Exercice());
  }
  eliminerExercise(index) {
    this.syllabus.exercices.splice(index, 1);
  }
}
