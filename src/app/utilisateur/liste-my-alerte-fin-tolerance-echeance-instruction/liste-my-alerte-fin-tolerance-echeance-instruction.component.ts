import {Component, OnInit, ViewChild} from '@angular/core';
import {Utilisateur} from "../../models/utilisateur";
import {MatTableDataSource} from "@angular/material/table";
import {Instruction} from "../../models/Instruction";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {ListeUtilisateursService} from "../../services/utilisateur/liste-utilisateurs.service";
import {ActivatedRoute, Router} from "@angular/router";
import {SyllabusService} from "../../services/syllabus/syllabus.service";
import {ActiviteFormation} from "../../models/activiteFormation";

@Component({
  selector: 'app-liste-my-alerte-fin-tolerance-echeance-instruction',
  templateUrl: './liste-my-alerte-fin-tolerance-echeance-instruction.component.html',
  styleUrls: ['./liste-my-alerte-fin-tolerance-echeance-instruction.component.css']
})
export class ListeMyAlerteFinToleranceEcheanceInstructionComponent implements OnInit {

  idUtilisateur: number;
  utilisateur: Utilisateur = new Utilisateur();

  displayedColumns: string[] = ['position', 'valide', 'echeance', 'dateEch', 'dateDebutToler', 'dateFinToler', 'codeActiviteFormation', 'typeActivite',  'nombreJours',  'dateDebutActivite',  'dateFinActivite'];
  public dataSource: MatTableDataSource<Instruction>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor( private listeUtilisateursService: ListeUtilisateursService,  private router: Router, private syllabusService: SyllabusService, private activatedRoute: ActivatedRoute) { }
  token: string;
  userConnected: Utilisateur;


  async ngOnInit() {
    this.token = localStorage.getItem('id_token');
    this.userConnected = JSON.parse(localStorage.getItem('user'));
    // this.idUtilisateur = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    // console.log(this.activatedRoute.snapshot.paramMap.get('id'));
    this.listeUtilisateursService.afficherMyAlerteFinTolerEcheanceInstructions(this.userConnected.id).subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

      console.log(data);
    });
    this.utilisateur = await this.listeUtilisateursService.afficherDetailUtilisateurAsync(this.userConnected.id);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
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
}
