import { Component, OnInit } from '@angular/core';
import {Utilisateur} from "../../../models/utilisateur";

@Component({
  selector: 'app-ajouter-fonctionnalite',
  templateUrl: './ajouter-fonctionnalite.component.html',
  styleUrls: ['./ajouter-fonctionnalite.component.css']
})
export class AjouterFonctionnaliteComponent implements OnInit {

  constructor() { }
  token: string;
  userConnected: Utilisateur;

  ngOnInit(): void {
    this.token = localStorage.getItem('id_token');
    this.userConnected = JSON.parse(localStorage.getItem('user'));
  }

}
