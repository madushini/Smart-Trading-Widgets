import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import {SettingsComponent} from "./settings.component";
import { SettingsRoutingModule } from './Settings-routing.module';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SettingsRoutingModule
    ],
    declarations: [SettingsComponent]
})
export class SettingsModule { }
