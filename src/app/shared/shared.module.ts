import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { ListCardComponent } from './component/list-card/list-card.component';
import { SliderComponent } from './component/slider/slider.component';
import { SwiperModule } from 'angular2-useful-swiper';
import { HoverItemDirective } from './directive/hover-item.directive';
import { RouterModule } from '@angular/router';
import { WordLimitPipe } from './pipe/word-limit.pipe';
import { FooterComponent } from './component/footer/footer.component';
// import { FavoriteDirective } from './directive/favorite.directive';

@NgModule({
  declarations: [
    HeaderComponent,
    ListCardComponent,
    SliderComponent,
    HoverItemDirective,
    WordLimitPipe,
    ListCardComponent,
    FooterComponent
    // FavoriteDirective
  ],
  imports: [
    CommonModule,
    SwiperModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    ListCardComponent,
    SliderComponent,
    HoverItemDirective,
    WordLimitPipe,
    ListCardComponent,
    FooterComponent
    // FavoriteDirective
  ]
})
export class SharedModule { }
