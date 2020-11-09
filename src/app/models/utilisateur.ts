import {Role} from './role';
import {Categorie} from './categorie';

export class Utilisateur {
  id: number;
  nom: string;
  prenom: string;
  codePN: string;
  numLicencePN: string;
  rank: number;
  cin: number;
  dateNaissance: Date;
  dateDebutContrat: Date;
  dateFinContrat: Date;
  nationalite: string;
  typePN: number;
  email: string;
  sexe: string;
  numeroTel: string;
  enabled: boolean;
  lastLogin: string;
  confirmation: string;
  confirmationToken: string;
  role: Role;
  categorie: Categorie;



}
