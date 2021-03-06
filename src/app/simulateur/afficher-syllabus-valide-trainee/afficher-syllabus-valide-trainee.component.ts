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
import {PdfService} from '../../services/pdf.service';
declare let pdfMake: any ;
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
@Component({
  selector: 'app-afficher-syllabus-valide-trainee',
  templateUrl: './afficher-syllabus-valide-trainee.component.html',
  styleUrls: ['./afficher-syllabus-valide-trainee.component.css']
})
export class AfficherSyllabusValideTraineeComponent implements OnInit {


  constructor(private pdfService: PdfService, private syllabusService: SyllabusService, private simulateurService: SimulateurService, private router: Router, private activatedRoute: ActivatedRoute) {}

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
  title = 'html-to-pdf';

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

    this.instructionT = await this.simulateurService.afficherSimulateurTrainee(this.simulateur.id);

    this.userT = this.instructionT.utilisateur;
    console.log(this.userT.id);
    console.log('Loading External Scripts');
    this.pdfService.load('pdfMake', 'vfsFonts');

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
  generatePdf() {
    console.log(pdfMake);
    const documentDefinition = this.getDocumentDefinition();
    pdfMake.createPdf(documentDefinition).open();

  }
  generatePDF() {
    /*const data = document.getElementById('contentToConvert');
    html2canvas(data).then(canvas => {
      const imgWidth = 208;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      const contentDataURL = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      pdf.save('syllabus' + this.seanceSimulateur.codeSeanceSimulateur + '.pdf');
    });*/
      const element = document.getElementById('contentToConvert');
      const options = {
        imageTimeout: 2000,
        background: 'white',
        allowTaint : true,
        useCORS: false,
        height: element.clientHeight,
        width: element.clientWidth
      };

      html2canvas(element, options).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');

      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      let heightLeft = imgHeight;
      const doc = new jsPDF('p', 'mm');
      let position = 0;

      doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      doc.save('Syllabus-Final-' + this.seanceSimulateur.codeSeanceSimulateur + '.pdf');
    });
  }
  getDocumentDefinition() {
    sessionStorage.setItem('syllabus', JSON.stringify(this.syllabus));
    sessionStorage.setItem('simulateur', JSON.stringify(this.simulateur));
    sessionStorage.setItem('seanceSimulateur', JSON.stringify(this.seanceSimulateur));
    sessionStorage.setItem('instruction', JSON.stringify(this.instruction));
    sessionStorage.setItem('instructionT', JSON.stringify(this.instructionT));
    return {
      content: [
        {
          text: 'SIMULATOR SESSION FINAL SYLLABUS',
          bold: true,
          fontSize: 20,
          alignment: 'center',
          margin: [0, 0, 0, 20],
          color:  '#3669e0'
        },
        {
          columns: [
            [{
              image: 'assets/img/logoNouvelair.png',
              width: 150
            },
              {
                text: this.syllabus.level
              },
              {
                text: this.syllabus.years,
              }
            ]
          ]
        },
        {
          style: 'tableExample',
          table: {
            body: [
              [{text: 'Logo Nouvelair'}, {text: this.syllabus.level} , {text: this.syllabus.years}]
            ]
          }
        },
        ]
    };
  }

}
