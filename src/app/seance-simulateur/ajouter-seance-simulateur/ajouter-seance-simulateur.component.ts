import { Component, OnInit } from '@angular/core';
import {Utilisateur} from "../../models/utilisateur";

@Component({
  selector: 'app-ajouter-seance-simulateur',
  templateUrl: './ajouter-seance-simulateur.component.html',
  styleUrls: ['./ajouter-seance-simulateur.component.css']
})
export class AjouterSeanceSimulateurComponent implements OnInit {

  constructor() { }
  token: string;
  userConnected: Utilisateur;




  ngOnInit(): void {
    this.token = localStorage.getItem('id_token');
    this.userConnected = JSON.parse(localStorage.getItem('user'));
  }

}
