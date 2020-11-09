import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {ActiviteFormation} from '../../models/activiteFormation';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {FormationService} from '../../services/activiteFormation/formation.service';
import {Router} from '@angular/router';
import {PopulationService} from '../../services/parametrage/population.service';
import {TypeFormationService} from '../../services/parametrage/type-formation.service';
import {NatureFormationService} from '../../services/parametrage/nature-formation.service';
import Swal from 'sweetalert2';
import {SimulateurService} from '../../services/activiteFormation/simulateur.service';
import {Utilisateur} from "../../models/utilisateur";

@Component({
  selector: 'app-liste-simulateurs',
  templateUrl: './liste-simulateurs.component.html',
  styleUrls: ['./liste-simulateurs.component.css']
})
export class ListeSimulateursComponent implements OnInit {

  displayedColumns: string[] = ['codeActiviteFormation', 'nombreJours', 'dateDebutActivite', 'dateFinActivite', 'periode', 'actions'];
  public dataSource: MatTableDataSource<ActiviteFormation>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private simulateurService: SimulateurService, private router: Router, private populationService: PopulationService, private typeFormationService: TypeFormationService, private natureFormationService: NatureFormationService) { }
  token: string;
  userConnected: Utilisateur;


  async ngOnInit() {
    this.token = localStorage.getItem('id_token');
    this.userConnected = JSON.parse(localStorage.getItem('user'));
    this.simulateurService.afficherSimulateur().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

      console.log(data);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  async deleteSimulateur(idActiviteFormation: number) {

    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        await this.simulateurService.deleteSimulateurAsync(idActiviteFormation);
        Swal.fire(
          'Deleted!',
          'Simulator Session has been deleted.',
          'success'
        ).then((e) =>  window.location.reload() );
      }
    });
  }



  addSimulateur() {
    this.router.navigateByUrl('/simulator/add');
  }

  editSimulateur(idActiviteFormation: number) {
    this.router.navigateByUrl('/simulator/edit/' + idActiviteFormation);
  }

  showDetailSimulateur(idSimulateur: number) {
    this.router.navigateByUrl('/simulator/show/' + idSimulateur);
  }

}
