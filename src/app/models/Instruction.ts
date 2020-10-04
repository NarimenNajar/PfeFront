import {Utilisateur} from './utilisateur';
import {ActiviteFormation} from './activiteFormation';

export class Instruction {
  id: number;
  valide: number;
  dateEch: Date;
  dateDebutToler: Date;
  dateFinToler: Date;
  position: string;
  echeance: boolean;
  utilisateur: Utilisateur;
  activiteFormation: ActiviteFormation;



}
