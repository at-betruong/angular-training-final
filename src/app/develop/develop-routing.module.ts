import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevelopComponent } from './develop.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { NotFoundComponent } from '../features/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: DevelopComponent,
    children: [
      {
        path: 'tooltip',
        component: TooltipComponent,
      },
      {
        path: '**',
        component: NotFoundComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevelopRoutingModule { }
