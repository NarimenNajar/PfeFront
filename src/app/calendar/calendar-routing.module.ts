import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChartsResultSimulatorComponent} from '../charts/charts-result-simulator/charts-result-simulator.component';
import {CalendarInstructionsComponent} from './calendar-instructions/calendar-instructions.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'all',
    pathMatch: 'full'
  },
  {
    path: 'calendarInstructions/:id',
    component: CalendarInstructionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarRoutingModule { }
