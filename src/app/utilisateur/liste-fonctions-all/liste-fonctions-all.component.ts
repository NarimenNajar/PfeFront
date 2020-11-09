import {Component, OnInit, ViewChild} from '@angular/core';
import {Utilisateur} from '../../models/utilisateur';
import {MatTableDataSource} from '@angular/material/table';
import {Instruction} from '../../models/Instruction';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {ListeUtilisateursService} from '../../services/utilisateur/liste-utilisateurs.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SyllabusService} from '../../services/syllabus/syllabus.service';
import {Fonction} from '../../models/fonction';

@Component({
  selector: 'app-liste-fonctions-all',
  templateUrl: './liste-fonctions-all.component.html',
  styleUrls: ['./liste-fonctions-all.component.css']
})
export class ListeFonctionsAllComponent implements OnInit {
  idUtilisateur: number;
  utilisateur: Utilisateur = new Utilisateur();
  displayedColumns: string[] = ['codeFonction', 'dateDebut', 'dateFin', 'typeFonction'];
  public dataSource: MatTableDataSource<Fonction>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor( private listeUtilisateursService: ListeUtilisateursService,  private router: Router, private syllabusService: SyllabusService, private activatedRoute: ActivatedRoute) { }
  token: string;
  userConnected: Utilisateur;



  async ngOnInit() {
    this.token = localStorage.getItem('id_token');
    this.userConnected = JSON.parse(localStorage.getItem('user'));
    this.idUtilisateur = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(this.activatedRoute.snapshot.paramMap.get('id'));
    this.listeUtilisateursService.afficherFonctionsAll(this.idUtilisateur).subscribe(data => {
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

  showFonctionsArchive(idUtilisateur: number) {
    this.router.navigateByUrl('/user/function/archive/' + idUtilisateur);
  }

  showFonctionsCurrent(idUtilisateur: number) {
    this.router.navigateByUrl('/user/function/current/' + idUtilisateur);
  }



}
