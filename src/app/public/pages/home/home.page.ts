import { Component, OnInit } from '@angular/core';

import SwiperCore, { Autoplay, Navigation, SwiperOptions } from "swiper";
import { Artist, ArtistService } from "@vibe/shared/services";

SwiperCore.use([Autoplay, Navigation]);

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

  artistCarouselConfig: SwiperOptions = {
    loop: true,
    autoplay: true,
    slidesPerView: 'auto',
    allowTouchMove: true,
    navigation: false,
    breakpoints: {
      '1280': {
        slidesPerView: 1
      },
      '1024': {
        slidesPerView: 1
      },
      '768': {
        slidesPerView: 1
      },
      '640': {
        slidesPerView: 1
      }
    }
  };

  showVideo = false;
  artists: Artist[] = [];

  constructor(private artistService: ArtistService) {
    this.getArtists();
  }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

  getArtists() {
    this.artistService.findAll().subscribe(
      res => this.artists = res
    );
  }

  toggleVideo() {
    this.showVideo = !this.showVideo;
  }

}
