import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsRoutingModule } from './charts-routing.module';
import {FusionChartsModule} from 'angular-fusioncharts';
import { ChartsResultSimulatorComponent } from './charts-result-simulator/charts-result-simulator.component';
import {HighchartsChartModule} from "highcharts-angular";


@NgModule({
  declarations: [ChartsResultSimulatorComponent],
    imports: [
        CommonModule,
        ChartsRoutingModule,
        FusionChartsModule,
        HighchartsChartModule
    ]
})
export class ChartsModule { }
