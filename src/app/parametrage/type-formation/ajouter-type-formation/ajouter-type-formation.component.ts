import { Component, OnInit } from '@angular/core';
import {Utilisateur} from "../../../models/utilisateur";

@Component({
  selector: 'app-ajouter-type-formation',
  templateUrl: './ajouter-type-formation.component.html',
  styleUrls: ['./ajouter-type-formation.component.css']
})
export class AjouterTypeFormationComponent implements OnInit {

  constructor() { }
  token: string;
  userConnected: Utilisateur;

  ngOnInit(): void {
    this.token = localStorage.getItem('id_token');
    this.userConnected = JSON.parse(localStorage.getItem('user'));
  }

}
