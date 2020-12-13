import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Reclamation} from '../../models/reclamation';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {Utilisateur} from '../../models/utilisateur';
import {SimulateurService} from '../../services/activiteFormation/simulateur.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-liste-reclamations-traitee',
  templateUrl: './liste-reclamations-traitee.component.html',
  styleUrls: ['./liste-reclamations-traitee.component.css']
})
export class ListeReclamationsTraiteeComponent implements OnInit {

  displayedColumns: string[] = ['objet', 'date', 'contenu', 'etat', 'seanceSimulateur', 'actions'];
  public dataSource: MatTableDataSource<Reclamation>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  token: string;
  userConnected: Utilisateur;
  constructor(private simulateurService: SimulateurService, private router: Router) { }

  async ngOnInit()  {
    this.token = localStorage.getItem('id_token');
    this.userConnected = JSON.parse(localStorage.getItem('user'));
    console.log('User connected is :');
    console.log(this.userConnected);
    console.log(this.userConnected.id);
    if (this.userConnected.role.role === 'Responsable Formation PNT') {

    this.simulateurService.afficherReclamationsTraitee().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

      console.log(data);
    });
    } else {
      this.router.navigateByUrl('/authentication/accessDenied');
    }
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  showReclamationsNonTraitee() {
    this.router.navigateByUrl('/claim/notProcessed');
  }

  showReclamations() {
    this.router.navigateByUrl('/claim/all');
  }


  showSyllabus(idSeanceSimulateur) {
    this.router.navigateByUrl('/simulator/show/validate/trainee/' + idSeanceSimulateur);
  }
}
