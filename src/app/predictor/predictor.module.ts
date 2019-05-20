import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PredictorRoutingModule } from './predictor-routing.module';
import { MainComponent } from './main/main.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    PredictorRoutingModule,
    MaterialModule
  ]
})
export class PredictorModule { }
