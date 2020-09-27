import {Component, OnInit, ViewChild} from '@angular/core';
import {CategorieService} from '../../../services/parametrage/categorie.service';
import {Route, Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {Categorie} from '../../../models/categorie';

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

  constructor(private categorieService: CategorieService, private router: Router) { }

 async ngOnInit()  {
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
    await this.categorieService.deleteCategorieAsync(idCategorie).then((e) =>  window.location.reload() );
  }

  addCat() {
    this.router.navigateByUrl('/category/create');
  }

  editCategorie(idCategorie: number) {
    this.router.navigateByUrl('/category/edit/' + idCategorie);
  }
}
