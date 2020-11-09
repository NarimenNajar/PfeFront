import { Component, OnInit } from '@angular/core';
import {Utilisateur} from "../../../models/utilisateur";

@Component({
  selector: 'app-modifier-fonctionnalite',
  templateUrl: './modifier-fonctionnalite.component.html',
  styleUrls: ['./modifier-fonctionnalite.component.css']
})
export class ModifierFonctionnaliteComponent implements OnInit {

  constructor() { }
  token: string;
  userConnected: Utilisateur;

  ngOnInit(): void {
    this.token = localStorage.getItem('id_token');
    this.userConnected = JSON.parse(localStorage.getItem('user'));
  }

}
