import { Component, OnInit } from '@angular/core';
import {Utilisateur} from "../../models/utilisateur";

@Component({
  selector: 'app-afficher-seance-simulateur',
  templateUrl: './afficher-seance-simulateur.component.html',
  styleUrls: ['./afficher-seance-simulateur.component.css']
})
export class AfficherSeanceSimulateurComponent implements OnInit {

  constructor() { }
  token: string;
  userConnected: Utilisateur;




  ngOnInit(): void {
    this.token = localStorage.getItem('id_token');
    this.userConnected = JSON.parse(localStorage.getItem('user'));
  }

}
