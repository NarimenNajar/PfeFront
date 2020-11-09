import { Component, OnInit } from '@angular/core';
import {Utilisateur} from "../../../models/utilisateur";

@Component({
  selector: 'app-ajouter-type-simulateur',
  templateUrl: './ajouter-type-simulateur.component.html',
  styleUrls: ['./ajouter-type-simulateur.component.css']
})
export class AjouterTypeSimulateurComponent implements OnInit {

  constructor() { }
  token: string;
  userConnected: Utilisateur;

  ngOnInit(): void {
    this.token = localStorage.getItem('id_token');
    this.userConnected = JSON.parse(localStorage.getItem('user'));
  }

}
