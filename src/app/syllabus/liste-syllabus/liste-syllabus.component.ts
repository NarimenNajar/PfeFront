import { Component, OnInit } from '@angular/core';
import { MatTableDataSource} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
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

  constructor(private syllabusService: SyllabusService, private router: Router) {

  }

  async ngOnInit() {
    this.syllabusService.afficherSyllabus().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      console.log(data);
    });

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  showDetailSyllabus(idSyllabus: number) {
    this.router.navigateByUrl('/syllabus/show/' + idSyllabus);
  }
   deleteSyllabys(idSyllabus: number) {
   this.syllabusService.deleteSyllabusAsync(idSyllabus);
  }
}
