import { Component, OnInit } from '@angular/core';
import {SystemeExterneService} from '../../../services/parametrage/systeme-externe.service';
import {Router} from '@angular/router';
import {SystemeExterne} from '../../../models/systemeExterne';
import {Utilisateur} from "../../../models/utilisateur";

@Component({
  selector: 'app-ajouter-systeme-externe',
  templateUrl: './ajouter-systeme-externe.component.html',
  styleUrls: ['./ajouter-systeme-externe.component.css']
})
export class AjouterSystemeExterneComponent implements OnInit {
  token: string;
  userConnected: Utilisateur;

  constructor(private systemeExterneService: SystemeExterneService, private router: Router) { }
  public systemeExterne: SystemeExterne = null;
  ngOnInit(): void {
    this.token = localStorage.getItem('id_token');
    this.userConnected = JSON.parse(localStorage.getItem('user'));
    this.systemeExterne = new SystemeExterne();
  }

  async CreerSystemeExterne() {
    await this.systemeExterneService.ajouterSystemeExterneAsync(this.systemeExterne).then( e => this.router.navigateByUrl('/externalSystem/all') );
  }

}
