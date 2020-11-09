import { Component, OnInit } from '@angular/core';
import {FormationService} from '../../services/activiteFormation/formation.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Instruction} from '../../models/Instruction';
import {Utilisateur} from '../../models/utilisateur';
import {ListeUtilisateursService} from '../../services/utilisateur/liste-utilisateurs.service';

@Component({
  selector: 'app-ajouter-instruction',
  templateUrl: './ajouter-instruction.component.html',
  styleUrls: ['./ajouter-instruction.component.css']
})
export class AjouterInstructionComponent implements OnInit {

  constructor(private formationService: FormationService, private router: Router, private activatedRoute: ActivatedRoute, private listeUtilisateursService: ListeUtilisateursService) { }
  public idActiviteFormation: number;
  public instruction: Instruction = null;
  public utilisateurs: Utilisateur[] = [];
  public idUtilisateur: number;
  token: string;
  userConnected: Utilisateur;






  async ngOnInit() {

    this.token = localStorage.getItem('id_token');
    this.userConnected = JSON.parse(localStorage.getItem('user'));
    this.idActiviteFormation = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(this.idActiviteFormation);



    this.listeUtilisateursService.afficherUtilisateursAsync().then(user => {
      this.utilisateurs = user;
      console.log(user); });
    this.instruction = new Instruction();
  }

 async AjouterInstruction(idUtilisateur: number) {
   await this.formationService.ajouterInstructionAsync(this.instruction, this.idActiviteFormation, idUtilisateur).then( e => this.router.navigateByUrl('/training/show/' + this.idActiviteFormation) );

 }

}
