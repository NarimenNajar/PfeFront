import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Categorie} from '../../../models/categorie';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {Fonction} from '../../../models/fonction';
import {FonctionService} from '../../../services/parametrage/fonction.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-liste-fonction',
  templateUrl: './liste-fonction.component.html',
  styleUrls: ['./liste-fonction.component.css']
})
export class ListeFonctionComponent implements OnInit {
  displayedColumns: string[] = ['codeFonction', 'dateDebut', 'dateFin', 'typeFonction', 'utilisateur', 'actions'];
  public dataSource: MatTableDataSource<Fonction>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private fonctionService: FonctionService, private router: Router) { }

  async ngOnInit()  {
    this.fonctionService.afficherFonction().subscribe(data => {
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

  async deleteFonction(idFonction: number) {

    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        await this.fonctionService.deleteFonctionAsync(idFonction);
        Swal.fire(
          'Deleted!',
          'Function has been deleted.',
          'success'
        ).then((e) =>  window.location.reload() );
      }
    });
  }


  addFonction() {
    this.router.navigateByUrl('/function/create');
  }

  editFonction(idFonction: number) {
    this.router.navigateByUrl('/function/edit/' + idFonction);
  }

}
