import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'authentification',
    loadChildren: () => import('./authentification/authentification.module').then(m => m.AuthentificationModule)
  },
  {
    path: 'formation',
    loadChildren: () => import('./formation/formation.module').then(m => m.FormationModule)
  },
  {
    path: 'reclamation',
    loadChildren: () => import('./reclamation/reclamation.module').then(m => m.ReclamationModule)
  },
  {
    path: 'seanceFormation',
    loadChildren: () => import('./seance-formation/seance-formation.module').then(m => m.SeanceFormationModule)
  },
  {
    path: 'seanceSimulateur',
    loadChildren: () => import('./seance-simulateur/seance-simulateur.module').then(m => m.SeanceSimulateurModule)
  },
  {
    path: 'syllabus',
    loadChildren: () => import('./syllabus/syllabus.module').then(m => m.SyllabusModule)
  },
  {
    path: 'utilisateur',
    loadChildren: () => import('./utilisateur/utilisateur.module').then(m => m.UtilisateurModule)
  },
  {
    path: '',
    redirectTo: 'authentification',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
