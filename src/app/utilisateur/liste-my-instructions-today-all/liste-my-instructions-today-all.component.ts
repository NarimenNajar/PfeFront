import {Component, OnInit, ViewChild} from '@angular/core';
import {ListeUtilisateursService} from "../../services/utilisateur/liste-utilisateurs.service";
import {ActivatedRoute, Router} from "@angular/router";
import {SyllabusService} from "../../services/syllabus/syllabus.service";
import {Utilisateur} from "../../models/utilisateur";
import {MatTableDataSource} from "@angular/material/table";
import {Instruction} from "../../models/Instruction";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatMenuTrigger} from "@angular/material/menu";
import {ActiviteFormation} from "../../models/activiteFormation";

@Component({
  selector: 'app-liste-my-instructions-today-all',
  templateUrl: './liste-my-instructions-today-all.component.html',
  styleUrls: ['./liste-my-instructions-today-all.component.css']
})
export class ListeMyInstructionsTodayAllComponent implements OnInit {

  constructor( private listeUtilisateursService: ListeUtilisateursService,  private router: Router, private syllabusService: SyllabusService, private activatedRoute: ActivatedRoute) { }

  idUtilisateur: number;
  utilisateur: Utilisateur = new Utilisateur();

  displayedColumns: string[] = ['position', 'valide', 'echeance', 'codeActiviteFormation', 'typeActivite',  'nombreJours',  'dateDebutActivite',  'dateFinActivite'];
  public dataSource: MatTableDataSource<Instruction>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  token: string;
  userConnected: Utilisateur;
  @ViewChild(MatMenuTrigger) triggerBtn: MatMenuTrigger;


  async ngOnInit() {
    this.token = localStorage.getItem('id_token');
    this.userConnected = JSON.parse(localStorage.getItem('user'));
    this.idUtilisateur = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(this.activatedRoute.snapshot.paramMap.get('id'));
    this.listeUtilisateursService.afficherMyAlerteInstructionsToday(this.idUtilisateur).subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

      console.log(data);
    });
    this.utilisateur = await this.listeUtilisateursService.afficherDetailUtilisateurAsync(this.idUtilisateur);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  showTodayInstructionsInstructor(idUtilisateur: number) {
    this.router.navigateByUrl('/user/instruction/today/instructor/' + idUtilisateur);
  }

  showTodayInstructionsTrainee(idUtilisateur: number) {
    this.router.navigateByUrl('/user/instruction/today/trainee/' + idUtilisateur);
  }

  showDetailFormation(idFormation: number, activiteFormation: ActiviteFormation) {
    if (activiteFormation.DTYPE === '1') {
      this.router.navigateByUrl('/simulator/show/' + idFormation);
    } else {
      this.router.navigateByUrl('/training/show/' + idFormation);
    }
  }

  showDetailUtilisateur(idUtilisateur: number) {
    this.router.navigateByUrl('/user/show/' + idUtilisateur);
  }

  openMatMenuProgrammatically() {
    this.triggerBtn.openMenu();
  }

}
