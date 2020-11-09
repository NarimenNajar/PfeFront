import { Component, OnInit } from '@angular/core';
import {Utilisateur} from "../../models/utilisateur";

@Component({
  selector: 'app-archive-seances-simulateur',
  templateUrl: './archive-seances-simulateur.component.html',
  styleUrls: ['./archive-seances-simulateur.component.css']
})
export class ArchiveSeancesSimulateurComponent implements OnInit {

  constructor() { }
  token: string;
  userConnected: Utilisateur;




  ngOnInit(): void {
    this.token = localStorage.getItem('id_token');
    this.userConnected = JSON.parse(localStorage.getItem('user'));
  }

}
