import {Component, OnInit, ViewChild} from '@angular/core';
import {CategorieService} from '../../../services/parametrage/categorie.service';
import {Route, Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {Categorie} from '../../../models/categorie';
import Swal from 'sweetalert2';
import {Utilisateur} from '../../../models/utilisateur';


@Component({
  selector: 'app-liste-categories',
  templateUrl: './liste-categories.component.html',
  styleUrls: ['./liste-categories.component.css']
})
export class ListeCategoriesComponent implements OnInit {
  displayedColumns: string[] = ['codeCategorie', 'categorie', 'actions'];
  public dataSource: MatTableDataSource<Categorie>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  token: string;
  userConnected: Utilisateur;

  constructor(private categorieService: CategorieService, private router: Router) { }

 async ngOnInit()  {
   this.token = localStorage.getItem('id_token');
   this.userConnected = JSON.parse(localStorage.getItem('user'));
   console.log('User connected is :');
   console.log(this.userConnected);
   console.log(this.userConnected.id);

   this.categorieService.afficherCategorie().subscribe(data => {
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
  async deleteCategorie(idCategorie: number) {

    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        await this.categorieService.deleteCategorieAsync(idCategorie);
        Swal.fire(
          'Deleted!',
          'Category has been deleted.',
          'success'
        ).then((e) =>  window.location.reload() );
      }
    });
  }



  addCat() {
    this.router.navigateByUrl('/category/create');
  }

  editCategorie(idCategorie: number) {
    this.router.navigateByUrl('/category/edit/' + idCategorie);
  }
}
