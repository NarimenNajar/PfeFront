import { Component, OnInit } from '@angular/core';
import {Syllabus} from '../../models/syllabus';
import {ActivatedRoute, Router} from '@angular/router';
import {SyllabusService} from '../../services/syllabus/syllabus.service';
import {Utilisateur} from "../../models/utilisateur";

@Component({
  selector: 'app-afficher-syllabus',
  templateUrl: './afficher-syllabus.component.html',
  styleUrls: ['./afficher-syllabus.component.css']
})
export class AfficherSyllabusComponent implements OnInit {
  private idSyllabus: number;
   syllabus: Syllabus = new Syllabus();
  constructor(private syllabusService: SyllabusService, private router: Router, private activatedRoute: ActivatedRoute) { }
  token: string;
  userConnected: Utilisateur;


  async ngOnInit() {
    this.token = localStorage.getItem('id_token');
    this.userConnected = JSON.parse(localStorage.getItem('user'));
    this.idSyllabus = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(this.activatedRoute.snapshot.paramMap.get('id'));
    // await this.syllabusService.afficherDetailSyllabusAsync(this.idSyllabus).then((syllabus) => console.log(syllabus));
    this.syllabus = await this.syllabusService.afficherDetailSyllabusAsync(this.idSyllabus);
  }

  editSyllabus(idSyllabus: number) {
    this.router.navigateByUrl('/syllabus/edit/' + idSyllabus);
  }


}
