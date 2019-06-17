import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeaturesComponent } from './features.component';
import { HomeComponent } from './home/home.component';
import { DetailCardComponent } from './detail-card/detail-card.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ListCardComponent } from '../shared/component/list-card/list-card.component';

const routes: Routes = [
  {
    path: '',
    component: FeaturesComponent,
    children: [
      {
        path: 'men',
        component: ListCardComponent,
      },
      {
        path: 'women',
        component: ListCardComponent,
      },
      {
        path: 'child',
        component: ListCardComponent,
      },
      {
        path: 'detail-card/:id',
        component: DetailCardComponent
      },
      {
        path: '',
        component: HomeComponent,
        data: {page: 'home'}
      }
      // ,
      // {
      //   path: '**',
      //   component: NotFoundComponent
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
