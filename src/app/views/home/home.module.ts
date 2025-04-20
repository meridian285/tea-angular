import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {MainComponent} from "./main/main.component";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule,
    SharedModule,
  ],
  exports: [
    HomeRoutingModule
  ]
})
export class HomeModule { }
