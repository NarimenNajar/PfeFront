import { Component, OnInit } from '@angular/core';
import {SystemeExterne} from '../../../models/systemeExterne';
import {SystemeExterneService} from '../../../services/parametrage/systeme-externe.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Utilisateur} from '../../../models/utilisateur';

@Component({
  selector: 'app-modifier-systeme-externe',
  templateUrl: './modifier-systeme-externe.component.html',
  styleUrls: ['./modifier-systeme-externe.component.css']
})
export class ModifierSystemeExterneComponent implements OnInit {

  private idSystemeExterne: number;
  systemeExterne: SystemeExterne = new SystemeExterne();
  token: string;
  userConnected: Utilisateur;

  constructor(private systemeExterneService: SystemeExterneService, private router: Router, private activatedRoute: ActivatedRoute) { }

 async ngOnInit() {
   this.token = localStorage.getItem('id_token');
   this.userConnected = JSON.parse(localStorage.getItem('user'));
   this.idSystemeExterne = Number(this.activatedRoute.snapshot.paramMap.get('id'));
   console.log(this.activatedRoute.snapshot.paramMap.get('id'));
   if (this.userConnected.role.role === 'Administrateur') {

     this.systemeExterne = await this.systemeExterneService.afficherDetailSystemeExterneAsync(this.idSystemeExterne);
   } else {
     this.router.navigateByUrl('/authentication/accessDenied');
   }
  }

  async updateSystemeExterne(idSystemeExterne, systemeExterne) {
    await this.systemeExterneService.updateSystemeExterne(idSystemeExterne, systemeExterne).then( e => this.router.navigateByUrl('/externalSystem/all') );
  }

}
