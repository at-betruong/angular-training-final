import { Component, OnInit, OnDestroy } from '@angular/core';
import { asTextData } from '@angular/core/src/view';
import {ApiService, API_DOMAIN, END_POINT} from './core/services/api.service';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  // descCart: any;
  title = 'erxercise-angular';

  private subscribe;
  news$: any;
  constructor(
  private api: ApiService,
  public router: Router) {}

  // config: SwiperOptions = {
  //   autoplay: 3000, // Autoplay option having value in milliseconds
  //   initialSlide: 3, // Slide Index Starting from 0
  //   slidesPerView: 3, // Slides Visible in Single View Default is 1
  //   pagination: '.swiper-pagination', // Pagination Class defined
  //   paginationClickable: true, // Making pagination dots clicable
  //   nextButton: '.swiper-button-next', // Class for next button
  //   prevButton: '.swiper-button-prev', // Class for prev button
  //   spaceBetween: 30 // Space between each Item
  // };

  ngOnInit() {
    /**
     *  exercise 9: service advance
     * this.subscribe = this.api.get(END_POINT.listNews).subscribe();
     * this.news$ = this.api.getAssets(END_POINT.newsJson);
     */

     /**
      * Use Router events: load start header of page
      */
     this.router.events.subscribe( e => {
      if (e instanceof NavigationStart) {
        window.scroll(0, 100);
      }
    });
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }
}
