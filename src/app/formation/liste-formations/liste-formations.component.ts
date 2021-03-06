import {Component, OnInit, ViewChild} from '@angular/core';
import {FormationService} from '../../services/activiteFormation/formation.service';
import {Router} from '@angular/router';
import {PopulationService} from '../../services/parametrage/population.service';
import {TypeFormationService} from '../../services/parametrage/type-formation.service';
import {NatureFormationService} from '../../services/parametrage/nature-formation.service';
import {MatTableDataSource} from '@angular/material/table';
import {Population} from '../../models/population';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {ActiviteFormation} from '../../models/activiteFormation';
import Swal from 'sweetalert2';
import {Utilisateur} from "../../models/utilisateur";

@Component({
  selector: 'app-liste-formations',
  templateUrl: './liste-formations.component.html',
  styleUrls: ['./liste-formations.component.css']
})
export class ListeFormationsComponent implements OnInit {

  displayedColumns: string[] = ['codeActiviteFormation', 'nombreJours', 'dateDebutActivite', 'dateFinActivite', 'actions'];
  public dataSource: MatTableDataSource<ActiviteFormation>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private formationService: FormationService, private router: Router, private populationService: PopulationService, private typeFormationService: TypeFormationService, private natureFormationService: NatureFormationService) { }
  token: string;
  userConnected: Utilisateur;

  async ngOnInit() {
    this.token = localStorage.getItem('id_token');
    this.userConnected = JSON.parse(localStorage.getItem('user'));
    if (this.userConnected.role.role === 'Responsable Formation PNC' ||  this.userConnected.role.role === 'Agent Administratif Formation PNC' || this.userConnected.role.role === 'Responsable Formation PNT' ||  this.userConnected.role.role === 'Agent Administratif Formation PNT'){

      this.formationService.afficherFormation().subscribe(data => {
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

  async deleteFormation(idActiviteFormation: number) {

    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        await this.formationService.deleteFormationAsync(idActiviteFormation);
        Swal.fire(
          'Deleted!',
          'Training has been deleted.',
          'success'
        ).then((e) =>  window.location.reload() );
      }
    });
  }



  addFormation() {
    this.router.navigateByUrl('/training/add');
  }

  editFormation(idActiviteFormation: number) {
    this.router.navigateByUrl('/training/edit/' + idActiviteFormation);
  }

}
