import { Component, OnInit } from '@angular/core';
import {FormationService} from '../../services/activiteFormation/formation.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ListeUtilisateursService} from '../../services/utilisateur/liste-utilisateurs.service';
import {Instruction} from '../../models/Instruction';
import {Utilisateur} from '../../models/utilisateur';
import {SimulateurService} from '../../services/activiteFormation/simulateur.service';

@Component({
  selector: 'app-ajouter-instruction-simulateur',
  templateUrl: './ajouter-instruction-simulateur.component.html',
  styleUrls: ['./ajouter-instruction-simulateur.component.css']
})
export class AjouterInstructionSimulateurComponent implements OnInit {
  constructor(private simulateurService: SimulateurService, private router: Router, private activatedRoute: ActivatedRoute, private listeUtilisateursService: ListeUtilisateursService) { }
  public idActiviteFormation: number;
  public instruction: Instruction = null;
  public utilisateurs: Utilisateur[] = [];
  public idUtilisateur: number;


  async ngOnInit() {

    this.idActiviteFormation = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(this.idActiviteFormation);



    this.listeUtilisateursService.afficherUtilisateursAsync().then(user => {
      this.utilisateurs = user;
      console.log(user); });
    this.instruction = new Instruction();
  }

  async AjouterInstruction(idUtilisateur: number) {
    await this.simulateurService.ajouterInstructionAsync(this.instruction, this.idActiviteFormation, idUtilisateur).then( e => this.router.navigateByUrl('/simulator/show/' + this.idActiviteFormation) );

  }

}
