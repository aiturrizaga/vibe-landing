import { Component, HostListener, OnInit } from '@angular/core';
import { Music, MusicService } from "@vibe/shared/services";

import SwiperCore, { Autoplay, Navigation, SwiperOptions } from "swiper";

SwiperCore.use([Autoplay, Navigation]);

@Component({
  selector: 'app-discography',
  templateUrl: './discography.page.html',
  styles: []
})
export class DiscographyPage implements OnInit {

  showSingle = false;
  singles: any;
  selectedMusic: Music = {
    order: 0,
    image: '',
    alt: '',
    name: '',
    description: '',
    networks: {
      spotify: '',
      youtube: ''
    }
  };

  singleCarouselConfig: SwiperOptions = {
    loop: false,
    slidesPerView: 'auto',
    allowTouchMove: true,
    navigation: false,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false
    }
  };

  constructor(public musicService: MusicService) {
    this.getSingles();
  }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

  getSingles() {
    this.musicService.singles$.subscribe(res => this.singles = res);
  }

  toggleSingle() {
    this.showSingle = !this.showSingle;
  }

  closeSingle() {
    this.showSingle = false;
  }

  openSingle() {
    this.showSingle = true;
  }

  openPlayer(data: Music) {
    this.toggleSingle();
    this.selectedMusic = data;
  }

  @HostListener('window:keyup.esc') onKeyUp() {
    this.closeSingle();
  }

}
