import { Component, OnInit } from '@angular/core';
import {Utilisateur} from "../../models/utilisateur";

@Component({
  selector: 'app-noter-seance-simulateur',
  templateUrl: './noter-seance-simulateur.component.html',
  styleUrls: ['./noter-seance-simulateur.component.css']
})
export class NoterSeanceSimulateurComponent implements OnInit {

  constructor() { }
  token: string;
  userConnected: Utilisateur;



  ngOnInit(): void {
    this.token = localStorage.getItem('id_token');
    this.userConnected = JSON.parse(localStorage.getItem('user'));
  }

}
