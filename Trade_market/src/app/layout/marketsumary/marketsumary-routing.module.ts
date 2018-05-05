import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {MarketsumaryComponent} from "./marketsumary.component";

const routes: Routes = [
    { path: '', component: MarketsumaryComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MarketsumaryRoutingModule { }
