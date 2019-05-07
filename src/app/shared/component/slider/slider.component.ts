import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, AfterViewInit {

  config: SwiperOptions = {
    autoplay: 3000, // Autoplay option having value in milliseconds
    initialSlide: 3, // Slide Index Starting from 0
    slidesPerView: 3, // Slides Visible in Single View Default is 1
    pagination: '.swiper-pagination', // Pagination Class defined
    paginationClickable: true, // Making pagination dots clicable
    nextButton: '.swiper-button-next', // Class for next button
    prevButton: '.swiper-button-prev', // Class for prev button
    spaceBetween: 30 // Space between each Item
  };

  constructor(
    private elementRef: ElementRef
  ) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    const swiper = new Swiper('.swiper-container', {
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      slidesPerView: 3,
      spaceBetween: 10,
      preventClicks: false,
      // default is true to prevent accident click when swipe. But it caused the link is not clickable sometimes.
      breakpoints: {
          1440: {
              slidesPerView: 3,
              spaceBetween: 20
          },
          1024: {
              slidesPerView: 3,
              spaceBetween: 10
          },
          768: {
              slidesPerView: 2,
              spaceBetween: 10
          },
          640: {
              slidesPerView: 1,
              spaceBetween: 10
          },
          320: {
              slidesPerView: 1,
              spaceBetween: 10
          }
      }
  });
  }

}
