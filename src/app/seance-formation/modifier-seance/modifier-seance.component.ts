import { Component, OnInit } from '@angular/core';
import {Utilisateur} from "../../models/utilisateur";

@Component({
  selector: 'app-modifier-seance',
  templateUrl: './modifier-seance.component.html',
  styleUrls: ['./modifier-seance.component.css']
})
export class ModifierSeanceComponent implements OnInit {

  constructor() { }

  token: string;
  userConnected: Utilisateur;




  ngOnInit(): void {
    this.token = localStorage.getItem('id_token');
    this.userConnected = JSON.parse(localStorage.getItem('user'));
  }

}
