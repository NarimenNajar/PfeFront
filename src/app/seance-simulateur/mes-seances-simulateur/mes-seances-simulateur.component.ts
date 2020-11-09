import { Component, OnInit } from '@angular/core';
import {Utilisateur} from "../../models/utilisateur";

@Component({
  selector: 'app-mes-seances-simulateur',
  templateUrl: './mes-seances-simulateur.component.html',
  styleUrls: ['./mes-seances-simulateur.component.css']
})
export class MesSeancesSimulateurComponent implements OnInit {

  constructor() { }
  token: string;
  userConnected: Utilisateur;



  ngOnInit(): void {
    this.token = localStorage.getItem('id_token');
    this.userConnected = JSON.parse(localStorage.getItem('user'));
  }

}
