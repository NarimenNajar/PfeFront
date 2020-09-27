import {Component, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {Syllabus} from '../../models/syllabus';
import {SyllabusService} from '../../services/syllabus/syllabus.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-liste-syllabus',
  templateUrl: './liste-syllabus.component.html',
  styleUrls: ['./liste-syllabus.component.css']
})
export class ListeSyllabusComponent implements OnInit {
  displayedColumns: string[] = ['CodeSyllabus', 'module', 'years', 'level', 'actions'];
  public dataSource: MatTableDataSource<Syllabus>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private syllabusService: SyllabusService, private router: Router) {

  }

  async ngOnInit() {
    this.syllabusService.afficherSyllabus().subscribe(data => {
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

  showDetailSyllabus(idSyllabus: number) {
    this.router.navigateByUrl('/syllabus/show/' + idSyllabus);
  }
   async deleteSyllabys(idSyllabus: number) {
   await this.syllabusService.deleteSyllabusAsync(idSyllabus).then((e) =>  window.location.reload() );
  }
  editSyllabys(idSyllabys: number) {
    this.router.navigateByUrl('/syllabus/edit/' + idSyllabys);
  }
}
