import { Component, OnInit } from '@angular/core';
import {Utilisateur} from "../../../models/utilisateur";

@Component({
  selector: 'app-afficher-type-formation',
  templateUrl: './afficher-type-formation.component.html',
  styleUrls: ['./afficher-type-formation.component.css']
})
export class AfficherTypeFormationComponent implements OnInit {

  constructor() { }
  token: string;
  userConnected: Utilisateur;

  ngOnInit(): void {
    this.token = localStorage.getItem('id_token');
    this.userConnected = JSON.parse(localStorage.getItem('user'));
  }

}
