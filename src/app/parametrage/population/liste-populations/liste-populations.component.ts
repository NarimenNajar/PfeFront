import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Categorie} from '../../../models/categorie';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {PopulationService} from '../../../services/parametrage/population.service';
import {Router} from '@angular/router';
import {Population} from '../../../models/population';

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

 async ngOnInit() {
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
    await this.populationService.deletePopulationAsync(idPopulation).then((e) =>  window.location.reload() );
  }

  addPopulation() {
    this.router.navigateByUrl('/population/create');
  }

  editPopulation(idPopulation: number) {
    this.router.navigateByUrl('/population/edit/' + idPopulation);
  }

}
