import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { FormsModule } from '@angular/forms';
import {MarketComponent} from "./market.component";
import { MarketRoutingModule } from './market-routing.module';
import { ChartModule } from 'angular-highcharts';
import { PageHeaderModule } from '../../shared';
import { Ng2SmartTableModule } from 'ng2-smart-table';
@NgModule({
    imports: [
        CommonModule,
        PageHeaderModule,
        Ng2GoogleChartsModule,
        Ng2SmartTableModule,
        FormsModule,ChartModule,
        MarketRoutingModule
    ],
    declarations: [MarketComponent]
})
export class MarketModule { }
