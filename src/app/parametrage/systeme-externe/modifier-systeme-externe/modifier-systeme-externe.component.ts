import { Component, OnInit } from '@angular/core';
import {SystemeExterne} from "../../../models/systemeExterne";
import {SystemeExterneService} from "../../../services/parametrage/systeme-externe.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-modifier-systeme-externe',
  templateUrl: './modifier-systeme-externe.component.html',
  styleUrls: ['./modifier-systeme-externe.component.css']
})
export class ModifierSystemeExterneComponent implements OnInit {

  private idSystemeExterne: number;
  systemeExterne: SystemeExterne = new SystemeExterne();

  constructor(private systemeExterneService: SystemeExterneService, private router: Router, private activatedRoute: ActivatedRoute) { }

 async ngOnInit() {
    this.idSystemeExterne = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(this.activatedRoute.snapshot.paramMap.get('id'));
    this.systemeExterne = await this.systemeExterneService.afficherDetailSystemeExterneAsync(this.idSystemeExterne);
  }

  async updateSystemeExterne(idSystemeExterne, systemeExterne) {
    await this.systemeExterneService.updateSystemeExterne(idSystemeExterne, systemeExterne).then( e => this.router.navigateByUrl('/externalSystem/all') );
  }

}
