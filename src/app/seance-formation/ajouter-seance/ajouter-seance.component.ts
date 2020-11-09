import { Component, OnInit } from '@angular/core';
import {Utilisateur} from "../../models/utilisateur";

@Component({
  selector: 'app-ajouter-seance',
  templateUrl: './ajouter-seance.component.html',
  styleUrls: ['./ajouter-seance.component.css']
})
export class AjouterSeanceComponent implements OnInit {

  constructor() { }
  token: string;
  userConnected: Utilisateur;


  ngOnInit(): void {
    this.token = localStorage.getItem('id_token');
    this.userConnected = JSON.parse(localStorage.getItem('user'));
  }

}
