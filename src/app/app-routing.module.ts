import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'authentication',
    loadChildren: () => import('./authentification/authentification.module').then(m => m.AuthentificationModule)
  },
  {
    path: 'training',
    loadChildren: () => import('./formation/formation.module').then(m => m.FormationModule)
  },
  {
    path: 'claim',
    loadChildren: () => import('./reclamation/reclamation.module').then(m => m.ReclamationModule)
  },
  {
    path: 'trainingSession',
    loadChildren: () => import('./seance-formation/seance-formation.module').then(m => m.SeanceFormationModule)
  },
  {
    path: 'simulatorSession',
    loadChildren: () => import('./seance-simulateur/seance-simulateur.module').then(m => m.SeanceSimulateurModule)
  },
  {
    path: 'syllabus',
    loadChildren: () => import('./syllabus/syllabus.module').then(m => m.SyllabusModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./utilisateur/utilisateur.module').then(m => m.UtilisateurModule)
  },
  {
    path: 'category',
    loadChildren: () => import('./parametrage/categorie/categorie.module').then(m => m.CategorieModule)
  },
  {
    path: 'population',
    loadChildren: () => import('./parametrage/population/population.module').then(m => m.PopulationModule)
  },
  {
    path: 'externalSystem',
    loadChildren: () => import('./parametrage/systeme-externe/systeme-externe.module').then(m => m.SystemeExterneModule)
  },
  {
    path: 'function',
    loadChildren: () => import('./parametrage/fonction/fonction.module').then(m => m.FonctionModule)
  },
  {
    path: 'functionType',
    loadChildren: () => import('./parametrage/type-fonction/type-fonction.module').then(m => m.TypeFonctionModule)
  },
  {
    path: 'trainingType',
    loadChildren: () => import('./parametrage/type-formation/type-formation.module').then(m => m.TypeFormationModule)
  },
  {
    path: 'simulatorType',
    loadChildren: () => import('./parametrage/type-simulateur/type-simulateur.module').then(m => m.TypeSimulateurModule)
  },
  {
    path: 'role',
    loadChildren: () => import('./parametrage/role/role.module').then(m => m.RoleModule)
  },
  {
    path: 'deadlineSetting',
    loadChildren: () => import('./parametrage/parametrage-echeance/parametrage-echeance.module').then(m => m.ParametrageEcheanceModule)
  },
  {
    path: 'feature',
    loadChildren: () => import('./parametrage/fonctionnalite/fonctionnalite.module').then(m => m.FonctionnaliteModule)
  },
  {
    path: 'simulator',
    loadChildren: () => import('./simulateur/simulateur.module').then(m => m.SimulateurModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./app.module').then(m => m.AppModule)
  },
  {
    path: 'charts',
    loadChildren: () => import('./charts/charts.module').then(m => m.ChartsModule)
  },
  {
    path: 'calendar',
    loadChildren: () => import('./calendar/calendar.module').then(m => m.CalendarModule)
  },
  {
    path: '',
    redirectTo: 'authentication',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
