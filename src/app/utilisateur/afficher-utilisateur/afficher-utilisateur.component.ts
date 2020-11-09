import { Component, OnInit } from '@angular/core';
import {Utilisateur} from '../../models/utilisateur';
import {ListeUtilisateursService} from '../../services/utilisateur/liste-utilisateurs.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-afficher-utilisateur',
  templateUrl: './afficher-utilisateur.component.html',
  styleUrls: ['./afficher-utilisateur.component.css']
})
export class AfficherUtilisateurComponent implements OnInit {
  private idUtilisateur: number;
  utilisateur: Utilisateur = new Utilisateur();
  constructor(private listeUtilisateursService: ListeUtilisateursService, private router: Router, private activatedRoute: ActivatedRoute) { }
  token: string;
  userConnected: Utilisateur;


  async ngOnInit() {
    this.token = localStorage.getItem('id_token');
    this.userConnected = JSON.parse(localStorage.getItem('user'));
    this.idUtilisateur = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(this.activatedRoute.snapshot.paramMap.get('id'));
    // await this.syllabusService.afficherDetailSyllabusAsync(this.idSyllabus).then((syllabus) => console.log(syllabus));
    this.utilisateur = await this.listeUtilisateursService.afficherDetailUtilisateurAsync(this.idUtilisateur);
  }


  showInstructions(idUtilisateur: number) {
    this.router.navigateByUrl('/user/instruction/all/' + idUtilisateur);
  }

  showFonctions(idUtilisateur: number) {
    this.router.navigateByUrl('/user/function/all/' + idUtilisateur);
  }


}
