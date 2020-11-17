import {Component, OnInit, ViewChild} from '@angular/core';
import { FullCalendarComponent, CalendarOptions } from '@fullcalendar/angular';
import {Utilisateur} from '../../models/utilisateur';
import {ActivatedRoute, Router} from '@angular/router';
import {ListeUtilisateursService} from '../../services/utilisateur/liste-utilisateurs.service';
import {SyllabusService} from '../../services/syllabus/syllabus.service';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import {MatTableDataSource} from "@angular/material/table";
import {Instruction} from "../../models/Instruction";

@Component({
  selector: 'app-calendar-instructions',
  templateUrl: './calendar-instructions.component.html',
  styleUrls: ['./calendar-instructions.component.css']
})
export class CalendarInstructionsComponent implements OnInit {
  token: string;
  userConnected: Utilisateur;
  idUtilisateur: number;
  utilisateur: Utilisateur = new Utilisateur();
  public instructions: Instruction[] = [];

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth'
  };
  displayEvent: any;
  eventsModel: any;

  @ViewChild(FullCalendarComponent) ucCalendar: FullCalendarComponent;
  constructor(public router: Router, private listeUtilisateursService: ListeUtilisateursService , private activatedRoute: ActivatedRoute) {
    this.token = localStorage.getItem('id_token');
    this.userConnected = JSON.parse(localStorage.getItem('user'));
    this.idUtilisateur = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(this.activatedRoute.snapshot.paramMap.get('id'));
    this.listeUtilisateursService.afficherInstructions(this.idUtilisateur).subscribe(data => {
      this.instructions = data;
      console.log(data);
    });
    console.log(this.instructions);

    this.calendarOptions = {
      plugins: [dayGridPlugin, interactionPlugin],
      editable: true,
      customButtons: {
        myCustomButton: {
          text: 'custom!',
          click() {
            alert('clicked the custom button!');
          }
        }
      },
      headerToolbar: {
        left: 'prev,next today myCustomButton',
        center: 'title',
        right: 'dayGridMonth'
      },
      dateClick: this.handleDateClick.bind(this),
      eventClick: this.handleEventClick.bind(this),
      eventDragStop: this.handleEventDragStop.bind(this)
    };
  }

  ngOnInit() {

  }

  handleDateClick(arg) {
    console.log(arg);
  }

  handleEventClick(arg) {
    console.log(arg);
  }

  handleEventDragStop(arg) {
    console.log(arg);
  }

  updateHeader() {
    this.calendarOptions.headerToolbar = {
      left: 'prev,next myCustomButton',
      center: 'title',
      right: ''
    };
  }

  updateEvents() {
    const nowDate = new Date();
    const yearMonth = nowDate.getUTCFullYear() + '-' + (nowDate.getUTCMonth() + 1);

    this.calendarOptions.events = [{
      title: 'Updaten Event',
      start: yearMonth + '-08',
      end: yearMonth + '-10'
    }];

  }

}
