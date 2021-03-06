import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Categorie} from '../../../models/categorie';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {PopulationService} from '../../../services/parametrage/population.service';
import {Router} from '@angular/router';
import {Population} from '../../../models/population';
import Swal from 'sweetalert2';
import {Utilisateur} from "../../../models/utilisateur";


@Component({
  selector: 'app-liste-populations',
  templateUrl: './liste-populations.component.html',
  styleUrls: ['./liste-populations.component.css']
})
export class ListePopulationsComponent implements OnInit {
  displayedColumns: string[] = ['codePopulation', 'population', 'actions'];
  public dataSource: MatTableDataSource<Population>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private populationService: PopulationService, private router: Router) { }
  token: string;
  userConnected: Utilisateur;

  async ngOnInit() {
    this.token = localStorage.getItem('id_token');
    this.userConnected = JSON.parse(localStorage.getItem('user'));
   this.populationService.afficherPopulation().subscribe(data => {
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

  async deletePopulation(idPopulation: number) {

    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        await this.populationService.deletePopulationAsync(idPopulation);
        Swal.fire(
          'Deleted!',
          'Population has been deleted.',
          'success'
        ).then((e) =>  window.location.reload() );
      }
    });
  }



  addPopulation() {
    this.router.navigateByUrl('/population/create');
  }

  editPopulation(idPopulation: number) {
    this.router.navigateByUrl('/population/edit/' + idPopulation);
  }

}
