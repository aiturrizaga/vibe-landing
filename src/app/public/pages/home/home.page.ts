import { Component, OnInit } from '@angular/core';

import SwiperCore, { Navigation, SwiperOptions } from "swiper";

SwiperCore.use([Navigation]);

@Component({
  selector: 'app-home-page',
  templateUrl: './home.page.html',
  styles: []
})
export class HomePage implements OnInit {

  config: SwiperOptions = {
    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 100,
    allowTouchMove: true,
    navigation: true,
    breakpoints: {
      '1280': {
        slidesPerView: 3
      },
      '1024': {
        slidesPerView: 3
      },
      '768': {
        slidesPerView: 2,
        spaceBetween: 40
      },
      '640': {
        slidesPerView: 1,
        spaceBetween: 0
      }
    }
  };

  showVideo = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleVideo() {
    this.showVideo = !this.showVideo;
  }

}
