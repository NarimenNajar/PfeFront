import { Component, OnInit } from '@angular/core';
import {Utilisateur} from "../../../models/utilisateur";

@Component({
  selector: 'app-afficher-fonction',
  templateUrl: './afficher-fonction.component.html',
  styleUrls: ['./afficher-fonction.component.css']
})
export class AfficherFonctionComponent implements OnInit {

  constructor() { }
  token: string;
  userConnected: Utilisateur;

  ngOnInit(): void {
    this.token = localStorage.getItem('id_token');
    this.userConnected = JSON.parse(localStorage.getItem('user'));
  }

}
