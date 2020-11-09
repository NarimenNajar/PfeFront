import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsRoutingModule } from './charts-routing.module';
import {FusionChartsModule} from 'angular-fusioncharts';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ChartsRoutingModule,
    FusionChartsModule
  ]
})
export class ChartsModule { }
