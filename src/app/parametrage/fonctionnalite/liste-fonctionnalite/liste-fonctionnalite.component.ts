import { Component, OnInit } from '@angular/core';
import {Utilisateur} from "../../../models/utilisateur";

@Component({
  selector: 'app-liste-fonctionnalite',
  templateUrl: './liste-fonctionnalite.component.html',
  styleUrls: ['./liste-fonctionnalite.component.css']
})
export class ListeFonctionnaliteComponent implements OnInit {

  constructor() { }
  token: string;
  userConnected: Utilisateur;

  ngOnInit(): void {
    this.token = localStorage.getItem('id_token');
    this.userConnected = JSON.parse(localStorage.getItem('user'));
  }

}
