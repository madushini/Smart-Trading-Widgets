import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { FormsModule } from '@angular/forms';
import {MarketsumaryComponent} from "./marketsumary.component";
import { MarketsumaryRoutingModule } from './marketsumary-routing.module';

import { PageHeaderModule } from '../../shared';
import { ChartModule } from 'angular-highcharts';
import { Ng2SmartTableModule } from 'ng2-smart-table';
@NgModule({
    imports: [
        CommonModule,
        ChartModule,
        PageHeaderModule,
        Ng2GoogleChartsModule,
        FormsModule,
        Ng2SmartTableModule,
        MarketsumaryRoutingModule
    ],
    declarations: [MarketsumaryComponent]
})
export class MarketsumaryModule { }
