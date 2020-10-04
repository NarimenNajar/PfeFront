import {Component, OnInit, ViewChild} from '@angular/core';
import {ParametrageEcheanceService} from '../../../services/parametrage/parametrage-echeance.service';
import {Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {ParametrageEcheance} from '../../../models/parametrageEcheance';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-liste-parametrage-echeance',
  templateUrl: './liste-parametrage-echeance.component.html',
  styleUrls: ['./liste-parametrage-echeance.component.css']
})
export class ListeParametrageEcheanceComponent implements OnInit {
  displayedColumns: string[] = ['etapeSuivante', 'calculeApartir', 'toleranceJours', 'echeanceFinMois', 'valideParDefaut', 'actions'];
  public dataSource: MatTableDataSource<ParametrageEcheance>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private parametrageEcheanceService: ParametrageEcheanceService, private router: Router) { }

  async ngOnInit()  {
    this.parametrageEcheanceService.afficherParametrageEcheance().subscribe(data => {
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
  async deleteParametrageEcheance(idParametrageEcheance: number) {

    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        await this.parametrageEcheanceService.deleteParametrageEcheanceAsync(idParametrageEcheance);
        Swal.fire(
          'Deleted!',
          'Deadline Setting has been deleted.',
          'success'
        ).then((e) =>  window.location.reload() );
      }
    });
  }



  addCat() {
    this.router.navigateByUrl('/deadlineSetting/create');
  }

  editParametrageEcheance(idParametrageEcheance: number) {
    this.router.navigateByUrl('/deadlineSetting/edit/' + idParametrageEcheance);
  }

}
