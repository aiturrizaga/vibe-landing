import { Component, HostListener, OnInit, ViewChild } from '@angular/core';

import SwiperCore, { Autoplay, Navigation, SwiperOptions } from "swiper";
import { Artist, ArtistService, ConstantService } from "@vibe/shared/services";
import { SwiperComponent } from "swiper/angular";

SwiperCore.use([Autoplay, Navigation]);

@Component({
  selector: 'app-home-page',
  templateUrl: './home.page.html',
  styles: []
})
export class HomePage implements OnInit {

  @ViewChild('swiperRef', {static: false}) swiper?: SwiperComponent;

  serviceCarouselConfig: SwiperOptions = {
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
    allowTouchMove: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false
    }
  };

  showVideo = false;
  selectedEmbed = '';
  artists: Artist[] = [];

  constructor(private artistService: ArtistService,
              public constantService: ConstantService) {
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
    if (!this.showVideo) {
      this.swiper?.swiperRef.autoplay.start();
    }
  }

  openFramePlayer(source: string) {
    this.toggleVideo();
    this.selectedEmbed = source;
    this.swiper?.swiperRef.autoplay.stop();
  }

  @HostListener('window:keyup.esc') onKeyUp() {
    this.toggleVideo();
  }

}
