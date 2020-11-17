import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarInstructionsComponent } from './calendar-instructions/calendar-instructions.component';
import {FullCalendarModule} from "@fullcalendar/angular";


@NgModule({
  declarations: [CalendarInstructionsComponent],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    FullCalendarModule
  ]
})
export class CalendarModule { }
