import { Component, OnInit } from '@angular/core';
import {Utilisateur} from "../../../models/utilisateur";

@Component({
  selector: 'app-liste-type-formation',
  templateUrl: './liste-type-formation.component.html',
  styleUrls: ['./liste-type-formation.component.css']
})
export class ListeTypeFormationComponent implements OnInit {

  constructor() { }
  token: string;
  userConnected: Utilisateur;

  ngOnInit(): void {
    this.token = localStorage.getItem('id_token');
    this.userConnected = JSON.parse(localStorage.getItem('user'));
  }

}
