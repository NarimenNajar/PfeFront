import { Component, OnInit } from '@angular/core';
import {Syllabus} from '../../models/syllabus';
import {ActivatedRoute, Router} from '@angular/router';
import {SyllabusService} from '../../services/syllabus/syllabus.service';

@Component({
  selector: 'app-afficher-syllabus',
  templateUrl: './afficher-syllabus.component.html',
  styleUrls: ['./afficher-syllabus.component.css']
})
export class AfficherSyllabusComponent implements OnInit {
  private idSyllabus: number;
  constructor(private syllabusService: SyllabusService, private router: Router, private activatedRoute: ActivatedRoute) { }

  async ngOnInit() {
    this.idSyllabus = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(this.activatedRoute.snapshot.paramMap.get('id'));
    await this.syllabusService.afficherDetailSyllabusAsync(this.idSyllabus).then((syllabus) => console.log(syllabus));
  }



}
