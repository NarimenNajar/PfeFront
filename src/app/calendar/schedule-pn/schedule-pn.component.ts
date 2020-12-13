import {Component, OnInit, ViewChild} from '@angular/core';
import {createElement, extend, L10n} from '@syncfusion/ej2-base';
import {
  EventSettingsModel,
  EventRenderedArgs,
  View,
  DayService,
  WeekService,
  MonthService,
  AgendaService,
  ResizeService,
  DragAndDropService,
  PopupOpenEventArgs,
  RecurrenceEditor, DragEventArgs, RecurrenceEditorChangeEventArgs, ScheduleComponent
} from '@syncfusion/ej2-angular-schedule';
import { ChangeEventArgs } from '@syncfusion/ej2-buttons';
import {DropDownList} from '@syncfusion/ej2-dropdowns';
import {DateTimePicker} from '@syncfusion/ej2-calendars';
import {DataManager, Query, RemoteSaveAdaptor, ReturnOption, WebApiAdaptor} from '@syncfusion/ej2-data';
import {FormBuilder} from '@angular/forms';
import Swal from 'sweetalert2';
declare const $: any;

import { loadCldr} from '@syncfusion/ej2-base';
import {Instruction} from '../../models/Instruction';
import {ActivatedRoute, Router} from '@angular/router';
import {ListeUtilisateursService} from '../../services/utilisateur/liste-utilisateurs.service';
import {Utilisateur} from '../../models/utilisateur';




@Component({
  selector: 'app-schedule-pn',
  templateUrl: './schedule-pn.component.html',
  styleUrls: ['./schedule-pn.component.css']
})
export class SchedulePNComponent implements OnInit {
  constructor(public router: Router, private listeUtilisateursService: ListeUtilisateursService , private activatedRoute: ActivatedRoute) {}

  instruction: Instruction = new Instruction();
  seanceModifiee: Instruction = new Instruction();
  public aa: object[];
  public items: object[];
  data: Instruction[];
  out: object[];
  public outData: object[];
  public dataManager: DataManager;
  public eventSettings: EventSettingsModel;
  recurrence: string;
  token: string;
  userConnected: Utilisateur;
  idUtilisateur: number;
  utilisateur: Utilisateur = new Utilisateur();
  public test: object[] = extend([], this.out, null, true) as object[];
  public selectedDate: Date = new Date();

  public currentView: View = 'Month';

  @ViewChild('scheduleObj', {static: true})
  public scheduleObj: ScheduleComponent;



  async ngOnInit() {
    this.token = localStorage.getItem('id_token');
    this.userConnected = JSON.parse(localStorage.getItem('user'));
    this.idUtilisateur = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(this.activatedRoute.snapshot.paramMap.get('id'));
    if ((this.userConnected.role.role === 'PNT' ||  this.userConnected.role.role === 'Instructeur PNT' || this.userConnected.role.role === 'PNC' ||  this.userConnected.role.role === 'Instructeur PNC') && this.idUtilisateur === this.userConnected.id) {

      this.data = await this.listeUtilisateursService.afficherInstructionsAsync(this.idUtilisateur);
      console.log(this.data);
      this.out = this.data.map(obj => {
      if (obj.position === 'Trainee') {
      return {
        Id: obj.id,
        Subject: obj.position,
        StartTime: new Date(obj.activiteFormation.dateDebutActivite),
        EndTime: new Date(obj.activiteFormation.dateFinActivite),
        CategoryColor: '#ffcc33',
        Description: obj.activiteFormation.codeActiviteFormation,
        DeadLine: new Date(obj.dateEch),
        EndOfTolerance: new Date(obj.dateFinToler),

        IsAllDay: true
      };
      } else if (obj.position === 'Instructor') {
        return {
          Id: obj.id,
          Subject: obj.position,
          StartTime: new Date(obj.activiteFormation.dateDebutActivite),
          EndTime: new Date(obj.activiteFormation.dateFinActivite),
          CategoryColor: '#3669e0',
          Description: obj.activiteFormation.codeActiviteFormation,
          DeadLine: new Date(obj.dateEch),
          EndOfTolerance: new Date(obj.dateFinToler),

          IsAllDay: true
        };
      }
    });

      this.outData = this.data;
      console.log(this.out);
      this.dataManager = new DataManager({
      json: JSON.parse(JSON.stringify(this.out)),
      adaptor: new RemoteSaveAdaptor()


    });

      this.eventSettings = {
      dataSource: this.out,
    };


      console.log(this.dataManager);
  } else {
      this.router.navigateByUrl('/authentication/accessDenied');
}
  }
  oneventRendered(args: EventRenderedArgs): void {
    const categoryColor: string = args.data.CategoryColor as string;
    if (!args.element || !categoryColor) {
      return;
    }
    if (this.currentView === 'Agenda') {
      (args.element.firstChild as HTMLElement).style.borderLeftColor = categoryColor;
    } else {
      args.element.style.backgroundColor = categoryColor;
    }
  }
  onChange(args: ChangeEventArgs): void {
    this.scheduleObj.eventSettings.editFollowingEvents = args.checked;
    console.log(args);
  }

  onPopupOpen(args: PopupOpenEventArgs): void {
    if (args.type === 'QuickInfo') {
      let data: any;
      data = args.data as any;

      console.log(data);
      if (data.Id === undefined) {
        args.cancel = true;
      } else {
        args.cancel = false;
        if (args.element.querySelector('.e-popup-content')) {
          console.log(args.element.querySelector('.e-popup-content'));
          const row: HTMLElement = createElement('div', {className: 'e-description'});
          console.log(row);
          // let formElement: HTMLElement = args.element.querySelector('.e-description');
          // formElement.firstChild.insertBefore(row, args.element.querySelector('.e-description'));
          const container: HTMLElement = createElement('div', {className: 'e-resource-icon e-icons'});
          const inputEle: HTMLElement = createElement('div', {className: 'e-description-details e-text-ellipsis'});
          const a: HTMLElement = createElement('a', {attrs: {href : '/#/prof/seance/details/' + data.Id}, innerHTML: 'Voir plus'});
          inputEle.append(a);
          row.appendChild(container);
          row.appendChild(inputEle);
          args.element.querySelector('.e-popup-content').append(row);
        }
      }
    }
  }
  public dateParser(data: string) {
    return new Date(data);
  }


}
