import {Component, OnInit, ViewChild} from '@angular/core';
import {Utilisateur} from "../../models/utilisateur";
import {MatTableDataSource} from "@angular/material/table";
import {Instruction} from "../../models/Instruction";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {ListeUtilisateursService} from "../../services/utilisateur/liste-utilisateurs.service";
import {ActivatedRoute, Router} from "@angular/router";
import {SyllabusService} from "../../services/syllabus/syllabus.service";

@Component({
  selector: 'app-liste-instructions-archive',
  templateUrl: './liste-instructions-archive.component.html',
  styleUrls: ['./liste-instructions-archive.component.css']
})
export class ListeInstructionsArchiveComponent implements OnInit {
  idUtilisateur: number;
  utilisateur: Utilisateur = new Utilisateur();

  displayedColumns: string[] = ['position', 'valide', 'echeance', 'codeActiviteFormation', 'typeActivite',  'nombreJours',  'dateDebutActivite',  'dateFinActivite'];
  public dataSource: MatTableDataSource<Instruction>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor( private listeUtilisateursService: ListeUtilisateursService,  private router: Router, private syllabusService: SyllabusService, private activatedRoute: ActivatedRoute) { }

  async ngOnInit() {
    this.idUtilisateur = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(this.activatedRoute.snapshot.paramMap.get('id'));
    this.listeUtilisateursService.afficherInstructionsArchive(this.idUtilisateur).subscribe(data => {
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


  showInstructions(idUtilisateur: number) {
    this.router.navigateByUrl('/user/instruction/all/' + idUtilisateur);
  }

  showInstructionsTrainee(idUtilisateur: number) {
    this.router.navigateByUrl('/user/instruction/trainee/' + idUtilisateur);
  }
  showInstructionsInstructor(idUtilisateur: number) {
    this.router.navigateByUrl('/user/instruction/instructor/' + idUtilisateur);
  }
}
