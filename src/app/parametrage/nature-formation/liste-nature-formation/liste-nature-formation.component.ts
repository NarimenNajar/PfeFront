import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Categorie} from '../../../models/categorie';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {Utilisateur} from '../../../models/utilisateur';
import {CategorieService} from '../../../services/parametrage/categorie.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import {NatureFormation} from '../../../models/natureFormation';
import {NatureFormationService} from '../../../services/parametrage/nature-formation.service';

@Component({
  selector: 'app-liste-nature-formation',
  templateUrl: './liste-nature-formation.component.html',
  styleUrls: ['./liste-nature-formation.component.css']
})
export class ListeNatureFormationComponent implements OnInit {

  displayedColumns: string[] = ['codeNatureFormation', 'natureFormation', 'actions'];
  public dataSource: MatTableDataSource<NatureFormation>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  token: string;
  userConnected: Utilisateur;

  constructor(private natureFormationService: NatureFormationService, private router: Router) { }

  async ngOnInit()  {
    this.token = localStorage.getItem('id_token');
    this.userConnected = JSON.parse(localStorage.getItem('user'));
    console.log('User connected is :');
    console.log(this.userConnected);
    console.log(this.userConnected.id);

    this.natureFormationService.afficherNatureFormation().subscribe(data => {
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
  async deleteNatureFormation(idNatureFormation: number) {

    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        await this.natureFormationService.deleteNatureFormationAsync(idNatureFormation);
        Swal.fire(
          'Deleted!',
          'Training Nature has been deleted.',
          'success'
        ).then((e) =>  window.location.reload() );
      }
    });
  }



  add() {
    this.router.navigateByUrl('/trainingNature/create');
  }

  edit(idNatureFormation: number) {
    this.router.navigateByUrl('/trainingNature/edit/' + idNatureFormation);
  }

}
