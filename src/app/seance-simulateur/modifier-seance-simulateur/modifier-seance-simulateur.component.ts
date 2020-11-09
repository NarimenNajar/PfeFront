import { Component, OnInit } from '@angular/core';
import {Utilisateur} from "../../models/utilisateur";

@Component({
  selector: 'app-modifier-seance-simulateur',
  templateUrl: './modifier-seance-simulateur.component.html',
  styleUrls: ['./modifier-seance-simulateur.component.css']
})
export class ModifierSeanceSimulateurComponent implements OnInit {

  constructor() { }
  token: string;
  userConnected: Utilisateur;




  ngOnInit(): void {
    this.token = localStorage.getItem('id_token');
    this.userConnected = JSON.parse(localStorage.getItem('user'));
  }

}
