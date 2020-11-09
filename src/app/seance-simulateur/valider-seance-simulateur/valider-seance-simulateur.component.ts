import { Component, OnInit } from '@angular/core';
import {Utilisateur} from "../../models/utilisateur";

@Component({
  selector: 'app-valider-seance-simulateur',
  templateUrl: './valider-seance-simulateur.component.html',
  styleUrls: ['./valider-seance-simulateur.component.css']
})
export class ValiderSeanceSimulateurComponent implements OnInit {

  constructor() { }
  token: string;
  userConnected: Utilisateur;



  ngOnInit(): void {
    this.token = localStorage.getItem('id_token');
    this.userConnected = JSON.parse(localStorage.getItem('user'));
  }

}
