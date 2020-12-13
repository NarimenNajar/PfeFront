import {Component, OnInit, ViewChild} from '@angular/core';
import {Utilisateur} from '../../models/utilisateur';
import {MatTableDataSource} from '@angular/material/table';
import {Reclamation} from '../../models/reclamation';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {SimulateurService} from '../../services/activiteFormation/simulateur.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-liste-reclamations',
  templateUrl: './liste-reclamations.component.html',
  styleUrls: ['./liste-reclamations.component.css']
})
export class ListeReclamationsComponent implements OnInit {

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

    this.simulateurService.afficherReclamations().subscribe(data => {
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

  showReclamationsTraitee() {
    this.router.navigateByUrl('/claim/processed');
  }

  showSyllabus(idSeanceSimulateur) {
      this.router.navigateByUrl('/simulator/show/validate/trainee/' + idSeanceSimulateur);
  }
  async traiterReclamation(idReclamation: number, reclamation: Reclamation) {

    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, mark it as treated!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        await this.simulateurService.traiterReclamation(idReclamation, reclamation);
        Swal.fire(
          'Treated!',
          'Complaint has been marked as treated.',
          'success'
        ).then((e) =>  window.location.reload() );
      }
    });
  }
}
