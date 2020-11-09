import { Component, OnInit } from '@angular/core';
import {Utilisateur} from "../../../models/utilisateur";

@Component({
  selector: 'app-modifier-type-formation',
  templateUrl: './modifier-type-formation.component.html',
  styleUrls: ['./modifier-type-formation.component.css']
})
export class ModifierTypeFormationComponent implements OnInit {

  constructor() { }
  token: string;
  userConnected: Utilisateur;

  ngOnInit(): void {
    this.token = localStorage.getItem('id_token');
    this.userConnected = JSON.parse(localStorage.getItem('user'));
  }

}
