import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import {TypeSimulateur} from '../../../models/typeSimulateur';
import {TypeSimulateurService} from '../../../services/parametrage/type-simulateur.service';
import {Utilisateur} from "../../../models/utilisateur";

@Component({
  selector: 'app-liste-type-simulateur',
  templateUrl: './liste-type-simulateur.component.html',
  styleUrls: ['./liste-type-simulateur.component.css']
})
export class ListeTypeSimulateurComponent implements OnInit {

  displayedColumns: string[] = ['codeTypeSimulateur', 'typeSimulateur', 'actions'];
  public dataSource: MatTableDataSource<TypeSimulateur>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private typeSimulateurService: TypeSimulateurService, private router: Router) { }
  token: string;
  userConnected: Utilisateur;

  async ngOnInit()  {
    this.token = localStorage.getItem('id_token');
    this.userConnected = JSON.parse(localStorage.getItem('user'));
    this.typeSimulateurService.afficherTypeSimulateur().subscribe(data => {
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
  async deleteTypeSimulateur(idTypeSimulateur: number) {

    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        await this.typeSimulateurService.deleteTypeSimulateurAsync(idTypeSimulateur);
        Swal.fire(
          'Deleted!',
          'Simulator Type has been deleted.',
          'success'
        ).then((e) =>  window.location.reload() );
      }
    });
  }



  addCat() {
    this.router.navigateByUrl('/simulatorType/create');
  }

  editTypeSimulateur(idTypeSimulateur: number) {
    this.router.navigateByUrl('/simulatorType/edit/' + idTypeSimulateur);
  }

}
