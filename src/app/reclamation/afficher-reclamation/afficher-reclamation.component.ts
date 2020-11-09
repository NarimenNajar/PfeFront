import { Component, OnInit } from '@angular/core';
import {Utilisateur} from "../../models/utilisateur";

@Component({
  selector: 'app-afficher-reclamation',
  templateUrl: './afficher-reclamation.component.html',
  styleUrls: ['./afficher-reclamation.component.css']
})
export class AfficherReclamationComponent implements OnInit {

  constructor() { }
  token: string;
  userConnected: Utilisateur;



  ngOnInit(): void {
    this.token = localStorage.getItem('id_token');
    this.userConnected = JSON.parse(localStorage.getItem('user'));
  }

}
