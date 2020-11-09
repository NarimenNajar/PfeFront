import {Component, OnInit, ViewChild} from '@angular/core';
import {PopulationService} from '../../../services/parametrage/population.service';
import {Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import {Categorie} from '../../../models/categorie';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {SystemeExterne} from '../../../models/systemeExterne';
import {SystemeExterneService} from '../../../services/parametrage/systeme-externe.service';
import Swal from 'sweetalert2';
import {Utilisateur} from "../../../models/utilisateur";

@Component({
  selector: 'app-liste-systeme-externe',
  templateUrl: './liste-systeme-externe.component.html',
  styleUrls: ['./liste-systeme-externe.component.css']
})
export class ListeSystemeExterneComponent implements OnInit {

  displayedColumns: string[] = ['codeSystemeExterne', 'serveur', 'motDePasse', 'user', 'token', 'sgbd', 'actions'];
  public dataSource: MatTableDataSource<SystemeExterne>;
  systemeExterne: SystemeExterne = new SystemeExterne();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private systemeExterneService: SystemeExterneService, private router: Router) { }
  token: string;
  userConnected: Utilisateur;

  async ngOnInit()  {
    this.token = localStorage.getItem('id_token');
    this.userConnected = JSON.parse(localStorage.getItem('user'));
    this.systemeExterneService.afficherSystemeExterne().subscribe(data => {
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
  async deleteSystemeExterne(idSystemeExterne: number) {

    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        await this.systemeExterneService.deleteSystemeExterneAsync(idSystemeExterne);
        Swal.fire(
          'Deleted!',
          'External System has been deleted.',
          'success'
        ).then((e) =>  window.location.reload() );
      }
    });
  }


  addSystemeExterne() {
    this.router.navigateByUrl('/externalSystem/create');
  }

  editSystemeExterne(idSystemeExterne: number) {
    this.router.navigateByUrl('/externalSystem/edit/' + idSystemeExterne);
  }

}
