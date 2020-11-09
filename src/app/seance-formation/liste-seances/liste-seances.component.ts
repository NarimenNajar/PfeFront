import { Component, OnInit } from '@angular/core';
import {Utilisateur} from "../../models/utilisateur";

@Component({
  selector: 'app-liste-seances',
  templateUrl: './liste-seances.component.html',
  styleUrls: ['./liste-seances.component.css']
})
export class ListeSeancesComponent implements OnInit {

  constructor() { }
  token: string;
  userConnected: Utilisateur;



  ngOnInit(): void {
    this.token = localStorage.getItem('id_token');
    this.userConnected = JSON.parse(localStorage.getItem('user'));
  }

}
