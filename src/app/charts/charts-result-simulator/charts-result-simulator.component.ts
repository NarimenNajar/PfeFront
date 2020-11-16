import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import {SimulateurService} from '../../services/activiteFormation/simulateur.service';
import {ActiviteFormation} from '../../models/activiteFormation';
import {Instruction} from '../../models/Instruction';
import {SeanceSimulateur} from '../../models/seanceSimulateur';
import {ListeUtilisateursService} from '../../services/utilisateur/liste-utilisateurs.service';
import {Router} from '@angular/router';
import {Utilisateur} from '../../models/utilisateur';
import {Note} from '../../models/note';
import {Level} from '../../models/level';

@Component({
  selector: 'app-charts-result-simulator',
  templateUrl: './charts-result-simulator.component.html',
  styleUrls: ['./charts-result-simulator.component.css']
})
export class ChartsResultSimulatorComponent implements OnInit {

  public seanceSimulateurs: SeanceSimulateur[] = [];
  public notes: Note[] = [];
  public levels: Level[] = [];
  public satisfactoryNumber = 0;
  public unsatisfactoryNumber = 0;
  public notYetNumber = 0;
  public note1 = 0;
  public note2 = 0;
  public note3 = 0;
  public note4 = 0;
  public note5 = 0;
  public levelU = 0;
  public levelP = 0;
  public levelS = 0;
  public levelSS = 0;
  public instructionsMyEch: Instruction[] = [];
  chart: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'pie'
    },
    title: {
      text: 'Satisfactory Simulator Chart'
    },
    credits: {
      enabled: false
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false
        },
        showInLegend: true
      }
    },
    series: [{
      type: 'pie',
      name: 'Brands',
      colorByPoint: true,
      data: [/*{
        name: 'Chrome',
        y: 61.41,
        sliced: false,
        selected: true
      }, {
        name: 'Internet Explorer',
        y: 11.84
      }, {
        name: 'Firefox',
        y: 10.85
      }, {
        name: 'Edge',
        y: 4.67
      }, {
        name: 'Safari',
        y: 4.18
      }, {
        name: 'Other',
        y: 7.05
      }*/]
    }]
  };
  chart2: typeof Highcharts = Highcharts;
  chartOptions2: Highcharts.Options = {
    chart: {
      type: 'pie'
    },
    title: {
      text: ' Simulator Notes Chart'
    },
    credits: {
      enabled: false
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false
        },
        showInLegend: true
      }
    },
    series: [{
      type: 'pie',
      name: 'Brands',
      colorByPoint: true,
      data: []
    }]
  };
  chart3: typeof Highcharts = Highcharts;
  chartOptions3: Highcharts.Options = {
    chart: {
      type: 'pie'
    },
    title: {
      text: ' Simulator Levels Chart'
    },
    credits: {
      enabled: false
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false
        },
        showInLegend: true
      }
    },
    series: [{
      type: 'pie',
      name: 'Brands',
      colorByPoint: true,
      data: []
    }]
  };
  updateFlag = false;
  oneToOneFlag = true;
  chartConstructor = 'chart';
  token: string;
  userConnected: Utilisateur;
  constructor(public router: Router, private simulateurService: SimulateurService, public listeUtilisateursService: ListeUtilisateursService) {
    this.token = localStorage.getItem('id_token');
    this.userConnected = JSON.parse(localStorage.getItem('user'));
// chart satisfactory
    this.simulateurService.afficherSeancesSimulateurs().subscribe(result => {
      this.seanceSimulateurs = result;
      console.log(this.seanceSimulateurs);

      console.log('charts');

      console.log( this.seanceSimulateurs);
      this.seanceSimulateurs.map(s => {
        if (s.resultFinal === 'SATISFACTORY') {
          this.satisfactoryNumber += 1;
        } else if (s.resultFinal === 'UNSATISFACTORY') {
          this.unsatisfactoryNumber += 1;
        } else {
          this.notYetNumber += 1;
        }
      });
      console.log( this.satisfactoryNumber);
      console.log( this.unsatisfactoryNumber);
      console.log( this.notYetNumber);
      this.updateFlag = true;

      this.updatechart();
    });

    // chart Notes
    this.simulateurService.afficherNotes().subscribe(result => {
      this.notes = result;
      console.log(this.notes);

      console.log('charts');

      console.log( this.notes);
      this.notes.map(s => {
        if (s.note === 1) {
          this.note1 += 1;
        } else if (s.note === 2) {
          this.note2 += 1;
        }  else if (s.note === 3) {
          this.note3 += 1;
        }  else if (s.note === 4) {
          this.note4 += 1;
        }  else if (s.note === 5) {
          this.note5 += 1;
        }
      });
      console.log( this.note1);
      console.log( this.note2);
      console.log( this.note3);
      console.log( this.note4);
      console.log( this.note5);
      this.updateFlag = true;

      this.updatechart2();
    });

    // chart levels
    this.simulateurService.afficherLevels().subscribe(result => {
      this.levels = result;
      console.log(this.levels);

      console.log('charts');

      console.log( this.levels);
      this.levels.map(s => {
        if (s.level === 'U') {
          this.levelU += 1;
        } else if (s.level === 'P') {
          this.levelP += 1;
        }  else if (s.level === 'S') {
          this.levelS += 1;
        }  else if (s.level === 'S+') {
          this.levelSS += 1;
        }
      });
      console.log( this.levelU);
      console.log( this.levelP);
      console.log( this.levelS);
      console.log( this.levelSS);
      this.updateFlag = true;

      this.updatechart3();
    });

  }

   async ngOnInit() {

     console.log( 'updatechart');






   }

  updatechart() {

    this.chartOptions.series.push(
      {
        name: 'Simulator',
        type: 'pie',
        data: [{name: 'Satisfactory', y: this.satisfactoryNumber}, {name: 'Unsatisfactory', y: this.unsatisfactoryNumber}, {name: 'Not Yet', y: this.notYetNumber}]
      });
  }
  updatechart2() {

    this.chartOptions2.series.push(
      {
        name: 'Note',
        type: 'pie',
        data: [{name: '1', y: this.note1}, {name: '2', y: this.note2}, {name: '3', y: this.note3}, {name: '4', y: this.note4}, {name: '5', y: this.note5}]
      });
  }
  updatechart3() {

    this.chartOptions3.series.push(
      {
        name: 'Level',
        type: 'pie',
        data: [{name: 'U', y: this.levelU}, {name: 'P', y: this.levelP}, {name: 'S', y: this.levelS}, {name: 'S+', y: this.levelSS}]
      });
  }




}
