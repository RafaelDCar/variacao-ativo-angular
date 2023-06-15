import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetRoutingModule } from './asset-routing.module';
import { ContainerComponent } from './components/container/container.component';
import { ViewComponent } from './components/view/view.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ContainerComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AssetRoutingModule
  ]
})
export class AssetModule { }
