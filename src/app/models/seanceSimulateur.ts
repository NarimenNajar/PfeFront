import {ActiviteFormation} from './activiteFormation';
import {Syllabus} from './syllabus';
import {TypeSimulateur} from './typeSimulateur';
import {Note} from './note';
import {Level} from './level';

export class SeanceSimulateur {
  id: number;
  dateSeanceSimulateur: Date;
  codeSeanceSimulateur: string;
  simulateur: ActiviteFormation;
  commentaire: string;
  resultFinal: string;
  syllabus: Syllabus;
  typeSimulateur: TypeSimulateur;
  notes: Note[] = [];
  levels: Level[] = [];



}
