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
import {Utilisateur} from "../../models/utilisateur";

@Component({
  selector: 'app-liste-formation-pnt',
  templateUrl: './liste-formation-pnt.component.html',
  styleUrls: ['./liste-formation-pnt.component.css']
})
export class ListeFormationPNTComponent implements OnInit {

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
    if (this.userConnected.role.role === 'Responsable Formation PNT' ||  this.userConnected.role.role === 'Agent Administratif Formation PNT'){
      this.formationService.afficherFormationPNT().subscribe(data => {
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
    this.router.navigateByUrl('/training/addPNT');
  }

  editFormation(idActiviteFormation: number) {
    this.router.navigateByUrl('/training/edit/' + idActiviteFormation);
  }

  showDetailFormation(idFormation: number) {
    this.router.navigateByUrl('/training/show/' + idFormation);
  }

}
