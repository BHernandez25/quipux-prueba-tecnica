import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {SearchComponent} from "./components/search/search.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {ProcedureComponent} from "./components/formalities/procedure.component";


@NgModule({
  declarations: [
    DashboardComponent,
    SearchComponent,
    ProcedureComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FontAwesomeModule
  ]
})
export class DashboardModule { }
