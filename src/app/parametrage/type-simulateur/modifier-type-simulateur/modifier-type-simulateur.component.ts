import { Component, OnInit } from '@angular/core';
import {Utilisateur} from "../../../models/utilisateur";

@Component({
  selector: 'app-modifier-type-simulateur',
  templateUrl: './modifier-type-simulateur.component.html',
  styleUrls: ['./modifier-type-simulateur.component.css']
})
export class ModifierTypeSimulateurComponent implements OnInit {

  constructor() { }
  token: string;
  userConnected: Utilisateur;


  ngOnInit(): void {
    this.token = localStorage.getItem('id_token');
    this.userConnected = JSON.parse(localStorage.getItem('user'));
  }

}
