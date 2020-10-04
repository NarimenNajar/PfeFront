import {Component, OnInit, ViewChild} from '@angular/core';
import {TypeFonctionService} from '../../../services/parametrage/type-fonction.service';
import {Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {TypeFonction} from '../../../models/typeFonction';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-liste-type-fonction',
  templateUrl: './liste-type-fonction.component.html',
  styleUrls: ['./liste-type-fonction.component.css']
})
export class ListeTypeFonctionComponent implements OnInit {

  displayedColumns: string[] = ['codeTypeFonction', 'typeFonction', 'actions'];
  public dataSource: MatTableDataSource<TypeFonction>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private typeFonctionService: TypeFonctionService, private router: Router) { }

  async ngOnInit()  {
    this.typeFonctionService.afficherTypeFonction().subscribe(data => {
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
  async deleteTypeFonction(idTypeFonction: number) {

    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        await this.typeFonctionService.deleteTypeFonctionAsync(idTypeFonction);
        Swal.fire(
          'Deleted!',
          'Function Type has been deleted.',
          'success'
        ).then((e) =>  window.location.reload() );
      }
    });
  }



  addCat() {
    this.router.navigateByUrl('/functionType/create');
  }

  editTypeFonction(idTypeFonction: number) {
    this.router.navigateByUrl('/functionType/edit/' + idTypeFonction);
  }

}
