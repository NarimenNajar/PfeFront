import { Component, OnInit } from '@angular/core';
import {Utilisateur} from "../../models/utilisateur";

@Component({
  selector: 'app-mes-reclamations',
  templateUrl: './mes-reclamations.component.html',
  styleUrls: ['./mes-reclamations.component.css']
})
export class MesReclamationsComponent implements OnInit {

  constructor() { }
  token: string;
  userConnected: Utilisateur;



  ngOnInit(): void {
    this.token = localStorage.getItem('id_token');
    this.userConnected = JSON.parse(localStorage.getItem('user'));
  }

}
