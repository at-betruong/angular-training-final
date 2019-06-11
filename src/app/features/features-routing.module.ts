import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeaturesComponent } from './features.component';
import { HomeComponent } from './home/home.component';
import { DetailCardComponent } from './detail-card/detail-card.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: FeaturesComponent,
    children: [
      {
        path: 'men', // news/:id
        component: HomeComponent,
        data: {page: 'men'}
      },
      {
        path: 'women',
        component: HomeComponent,
        data: {page: 'women'}
      },
      {
        path: 'child', // news/:id
        component: HomeComponent,
        data: {page: 'child'}
      },
      {
        path: 'detail-card/:id',
        component: DetailCardComponent
      },
      {
        path: '',
        component: HomeComponent
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
