import {Component, OnInit, ViewChild} from '@angular/core';
import {Utilisateur} from '../../../models/utilisateur';
import {MatTableDataSource} from '@angular/material/table';
import {Categorie} from '../../../models/categorie';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {CategorieService} from '../../../services/parametrage/categorie.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import {TypeFonction} from '../../../models/typeFonction';
import {TypeFormation} from '../../../models/typeFormation';
import {TypeFormationService} from '../../../services/parametrage/type-formation.service';

@Component({
  selector: 'app-liste-type-formation',
  templateUrl: './liste-type-formation.component.html',
  styleUrls: ['./liste-type-formation.component.css']
})
export class ListeTypeFormationComponent implements OnInit {

  displayedColumns: string[] = ['codeTypeFormation', 'typeFormation', 'parametrageEcheance', 'actions'];
  public dataSource: MatTableDataSource<TypeFormation>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  token: string;
  userConnected: Utilisateur;

  constructor(private typeFormationService: TypeFormationService, private router: Router) { }

  async ngOnInit()  {
    this.token = localStorage.getItem('id_token');
    this.userConnected = JSON.parse(localStorage.getItem('user'));
    console.log('User connected is :');
    console.log(this.userConnected);
    console.log(this.userConnected.id);

    this.typeFormationService.afficherTypeFormation().subscribe(data => {
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
  async delete(id: number) {

    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        await this.typeFormationService.deleteTypeFormationAsync(id);
        Swal.fire(
          'Deleted!',
          'Training Type has been deleted.',
          'success'
        ).then((e) =>  window.location.reload() );
      }
    });
  }



  add() {
    this.router.navigateByUrl('/trainingType/create');
  }

  edit(id: number) {
    this.router.navigateByUrl('/trainingType/edit/' + id);
  }
  showDetailParametrageEch(id: number) {
    this.router.navigateByUrl('/deadlineSetting/show/' + id);
  }
}
