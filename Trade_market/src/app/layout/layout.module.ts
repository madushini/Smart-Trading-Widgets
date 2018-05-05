import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { DataTableModule } from 'angular-4-data-table';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent, SidebarComponent } from '../shared';

import { Ng2SmartTableModule } from 'ng2-smart-table';


@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        Ng2SmartTableModule,
        DataTableModule,
        NgbDropdownModule.forRoot(),
        LayoutRoutingModule,
    ],
    declarations: [
        LayoutComponent,
        HeaderComponent,
        SidebarComponent,




    ]
})
export class LayoutModule { }
