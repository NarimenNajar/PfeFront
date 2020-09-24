import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Utilisateur} from '../../models/utilisateur';
import {ListeUtilisateursService} from '../../services/utilisateur/liste-utilisateurs.service';
import {Syllabus} from '../../models/syllabus';
import {SyllabusService} from '../../services/syllabus/syllabus.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-liste-utilisateurs',
  templateUrl: './liste-utilisateurs.component.html',
  styleUrls: ['./liste-utilisateurs.component.css']
})
export class ListeUtilisateursComponent implements OnInit {

  public ListUsers: Utilisateur[];
  public ListUsersAsync: Utilisateur[];
  public ListSyllabussAsync: Syllabus[];
  displayedColumns: string[] = ['prenom', 'nom', 'typePN', 'codePN', 'sexe',  'email',  'cin'];
  public dataSource: MatTableDataSource<Utilisateur>;

  constructor( private listeUtilisateursService: ListeUtilisateursService,  private router: Router, private syllabusService: SyllabusService) { }

  async ngOnInit() {
   /* this.listeUtilisateursService.afficherUtilisateurs().subscribe(data => {
    console.log(data);
    this.ListUsers = data;
  }, error => console.log(error) );
    console.log(this.ListUsers);

    this.ListUsersAsync = await this.listeUtilisateursService.afficherUtilisateursAsync();
    console.log(this.ListUsersAsync);
    this.ListSyllabussAsync = await this.syllabusService.afficherSyllabusAsync();
    console.log(this.ListSyllabussAsync); */
    this.listeUtilisateursService.afficherUtilisateurs().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      console.log(data);
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  showDetailUtilisateur(idUtilisateur: number) {
    this.router.navigateByUrl('/user/show/' + idUtilisateur);
  }

}
