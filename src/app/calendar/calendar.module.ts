import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarInstructionsComponent } from './calendar-instructions/calendar-instructions.component';
import {FullCalendarModule} from "@fullcalendar/angular";

import { SchedulePNComponent } from './schedule-pn/schedule-pn.component';

import { DatePickerAllModule, TimePickerAllModule, DateTimePickerAllModule } from '@syncfusion/ej2-angular-calendars';


import { ScheduleAllModule, RecurrenceEditorAllModule, RecurrenceEditorModule  } from '@syncfusion/ej2-angular-schedule';


@NgModule({
  declarations: [CalendarInstructionsComponent, SchedulePNComponent],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    FullCalendarModule,
    ScheduleAllModule
  ]
})
export class CalendarModule { }
