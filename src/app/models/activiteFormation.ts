import {NatureFormation} from './natureFormation';
import {Population} from './population';
import {TypeFormation} from './typeFormation';
import {Instruction} from './Instruction';
import {SeanceFormation} from './seanceFormation';
import {SeanceSimulateur} from './seanceSimulateur';

export class ActiviteFormation {
  id: number;
  codeActiviteFormation: string;
  typeActivite: number;
  nombreJours: number;
  dateDebutActivite: Date;
  dateFinActivite: Date;
  natureFormation: NatureFormation;
  populations: Population[] = [];
  typeFormation: TypeFormation;
  instructions: Instruction[] = [];
  DTYPE: string;


  // Formation


  titreFormation: string;
  seanceFormations: SeanceFormation[];


  // Simulateur



  periode: number;
  seanceSimulateurs: SeanceSimulateur[];


}
