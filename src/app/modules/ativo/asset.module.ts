import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { AssetRoutingModule } from './asset-routing.module';
import { ContainerComponent } from './components/container/container.component';
import { ViewComponent } from './components/view/view.component';
import { ChartComponent } from './components/chart/chart.component';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [
    ContainerComponent,
    ViewComponent,
    ChartComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AssetRoutingModule,
    HighchartsChartModule
  ]
})
export class AssetModule { }
