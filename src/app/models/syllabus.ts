import {Exercice} from './exercice';
import {Description} from './description';
import {Competence} from './competence';
import {Partie} from './partie';

export class Syllabus {
  id: number;
  level: string;
  module: string;
  overview: string;
  codeSyllabus: string;
  exercices: Exercice[] = [];
  descriptions: Description[] = [];
  competences: Competence[] = [];
  parties: Partie[] = [];




}
