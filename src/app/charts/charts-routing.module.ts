import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AfficherFormationComponent} from '../formation/afficher-formation/afficher-formation.component';
import {ChartsResultSimulatorComponent} from './charts-result-simulator/charts-result-simulator.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'all',
    pathMatch: 'full'
  },
  {
    path: 'chartsResultSimulator',
    component: ChartsResultSimulatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartsRoutingModule { }
