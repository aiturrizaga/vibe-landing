import { Component, OnInit } from '@angular/core';

import SwiperCore, { Autoplay, Navigation, SwiperOptions } from "swiper";

SwiperCore.use([Autoplay, Navigation]);

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.page.html',
  styles: []
})
export class AboutUsPage implements OnInit {

  artistCarouselConfig: SwiperOptions = {
    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 100,
    allowTouchMove: true,
    navigation: false,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false
    }
  };

  constructor() {
  }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

}
