import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevelopRoutingModule } from './develop-routing.module';
import { NotFoundComponent } from '../features/not-found/not-found.component';
import { TooltipComponent } from './tooltip/tooltip.component';

@NgModule({
  declarations: [
    TooltipComponent
  ],
  imports: [
    DevelopRoutingModule,
    CommonModule
  ]
})
export class DevelopModule { }
