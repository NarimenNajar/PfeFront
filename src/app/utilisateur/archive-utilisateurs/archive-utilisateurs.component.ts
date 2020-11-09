import { Component, OnInit } from '@angular/core';
import {Utilisateur} from "../../models/utilisateur";

@Component({
  selector: 'app-archive-utilisateurs',
  templateUrl: './archive-utilisateurs.component.html',
  styleUrls: ['./archive-utilisateurs.component.css']
})
export class ArchiveUtilisateursComponent implements OnInit {

  constructor() { }
  token: string;
  userConnected: Utilisateur;


  ngOnInit(): void {
    this.token = localStorage.getItem('id_token');
    this.userConnected = JSON.parse(localStorage.getItem('user'));
  }

}
