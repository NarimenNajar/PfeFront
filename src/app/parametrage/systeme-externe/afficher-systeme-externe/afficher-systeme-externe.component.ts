import { Component, OnInit } from '@angular/core';
import {Utilisateur} from "../../../models/utilisateur";

@Component({
  selector: 'app-afficher-systeme-externe',
  templateUrl: './afficher-systeme-externe.component.html',
  styleUrls: ['./afficher-systeme-externe.component.css']
})
export class AfficherSystemeExterneComponent implements OnInit {

  constructor() { }
  token: string;
  userConnected: Utilisateur;

  ngOnInit(): void {
    this.token = localStorage.getItem('id_token');
    this.userConnected = JSON.parse(localStorage.getItem('user'));
  }

}
