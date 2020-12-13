import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChartsResultSimulatorComponent} from '../charts/charts-result-simulator/charts-result-simulator.component';
import {CalendarInstructionsComponent} from './calendar-instructions/calendar-instructions.component';
import {SchedulePNComponent} from './schedule-pn/schedule-pn.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'all',
    pathMatch: 'full'
  },
  {
    path: 'calendarInstructions/:id',
    component: CalendarInstructionsComponent
  },
  {
    path: 'mySchedule/:id',
    component: SchedulePNComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarRoutingModule { }
