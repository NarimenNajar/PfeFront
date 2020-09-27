import {Component, OnInit, ViewChild} from '@angular/core';
import {PopulationService} from "../../../services/parametrage/population.service";
import {Router} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";
import {Categorie} from "../../../models/categorie";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {SystemeExterne} from "../../../models/systemeExterne";
import {SystemeExterneService} from "../../../services/parametrage/systeme-externe.service";

@Component({
  selector: 'app-liste-systeme-externe',
  templateUrl: './liste-systeme-externe.component.html',
  styleUrls: ['./liste-systeme-externe.component.css']
})
export class ListeSystemeExterneComponent implements OnInit {

  displayedColumns: string[] = ['codeSystemeExterne', 'serveur', 'motDePasse', 'user', 'token', 'sgbd', 'actions'];
  public dataSource: MatTableDataSource<SystemeExterne>;
  systemeExterne: SystemeExterne = new SystemeExterne();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private systemeExterneService: SystemeExterneService, private router: Router) { }

  async ngOnInit()  {
    this.systemeExterneService.afficherSystemeExterne().subscribe(data => {
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
  async deleteSystemeExterne(idSystemeExterne: number) {
    await this.systemeExterneService.deleteSystemeExterneAsync(idSystemeExterne).then((e) =>  window.location.reload() );
  }

  addSystemeExterne() {
    this.router.navigateByUrl('/externalSystem/create');
  }

  editSystemeExterne(idSystemeExterne: number) {
    this.router.navigateByUrl('/externalSystem/edit/' + idSystemeExterne);
  }

}
