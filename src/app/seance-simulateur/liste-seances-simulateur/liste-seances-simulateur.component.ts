import { Component, OnInit } from '@angular/core';
import {Utilisateur} from "../../models/utilisateur";

@Component({
  selector: 'app-liste-seances-simulateur',
  templateUrl: './liste-seances-simulateur.component.html',
  styleUrls: ['./liste-seances-simulateur.component.css']
})
export class ListeSeancesSimulateurComponent implements OnInit {

  constructor() { }
  token: string;
  userConnected: Utilisateur;



  ngOnInit(): void {
    this.token = localStorage.getItem('id_token');
    this.userConnected = JSON.parse(localStorage.getItem('user'));
  }

}
