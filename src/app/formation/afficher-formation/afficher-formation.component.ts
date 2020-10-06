import { Component, OnInit } from '@angular/core';
import {FormationService} from '../../services/activiteFormation/formation.service';
import {ActivatedRoute, Router} from '@angular/router';
import {PopulationService} from '../../services/parametrage/population.service';
import {TypeFormationService} from '../../services/parametrage/type-formation.service';
import {NatureFormationService} from '../../services/parametrage/nature-formation.service';
import {ListeUtilisateursService} from '../../services/utilisateur/liste-utilisateurs.service';
import {ActiviteFormation} from '../../models/activiteFormation';
import {Instruction} from '../../models/Instruction';

@Component({
  selector: 'app-afficher-formation',
  templateUrl: './afficher-formation.component.html',
  styleUrls: ['./afficher-formation.component.css']
})
export class AfficherFormationComponent implements OnInit {

  constructor(private formationService: FormationService, private router: Router, private populationService: PopulationService, private typeFormationService: TypeFormationService, private natureFormationService: NatureFormationService, private listeUtilisateursService: ListeUtilisateursService, private activatedRoute: ActivatedRoute) { }
  private idFormation: number;
  activiteFormation: ActiviteFormation = new ActiviteFormation();
  public instructionsByAct: Instruction[] = [];


  async ngOnInit() {
    this.idFormation = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(this.idFormation);
    this.formationService.afficherInstructionByFormation(this.idFormation).then( instruction => {
      this.instructionsByAct = instruction;
      console.log(instruction); });
    console.log(this.instructionsByAct);

    this.activiteFormation = await this.formationService.afficherDetailFormationAsync(this.idFormation);


  }


  editFormation(idFormation: number) {
    this.router.navigateByUrl('/training/edit/' + idFormation);
  }

  showDetailUtilisateur(idUtilisateur: number) {
    this.router.navigateByUrl('/user/show/' + idUtilisateur);
  }

  showDetailParametrageEcheance(idParametrageEcheance: number) {
    this.router.navigateByUrl('/deadlineSetting/show/' + idParametrageEcheance);
  }

  addInstruction(idActiviteFormation: number) {
    this.router.navigateByUrl('/training/addInstruction/' + idActiviteFormation);
  }


}
