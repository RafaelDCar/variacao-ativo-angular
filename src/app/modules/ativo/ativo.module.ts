import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtivoRoutingModule } from './ativo-routing.module';
import { ContainerComponent } from './components/container/container.component';
import { ViewComponent } from './components/view/view.component';


@NgModule({
  declarations: [
    ContainerComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    AtivoRoutingModule
  ]
})
export class AtivoModule { }
