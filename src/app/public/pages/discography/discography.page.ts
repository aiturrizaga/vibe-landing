import { Component, HostListener, OnInit } from '@angular/core';
import { Artist, ArtistService, Music, MusicService } from "@vibe/shared/services";

import SwiperCore, { Autoplay, Navigation, SwiperOptions } from "swiper";

SwiperCore.use([Autoplay, Navigation]);

@Component({
  selector: 'app-discography',
  templateUrl: './discography.page.html',
  styles: []
})
export class DiscographyPage implements OnInit {

  showSingle = false;
  showArtist = false;
  singles: any;
  artists: Artist[] = [];
  selectedMusic: Music = {
    order: 0,
    image: '',
    alt: '',
    name: '',
    descriptions: [],
    networks: {
      spotify: '',
      youtube: '',
      instagram: '',
      tiktok: ''
    }
  };

  selectedArtist: Artist = {
    order: 0,
    image: '',
    name: '',
    description: '',
    networks: {
      spotify: '',
      youtube: '',
      instagram: '',
      tiktok: ''
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

  constructor(public musicService: MusicService,
              private artistService: ArtistService) {
    this.getSingles();
    this.getArtists();
  }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

  getSingles() {
    this.musicService.singles$.subscribe(res => this.singles = res);
  }

  getArtists() {
    this.artistService.getArtists().subscribe(res => this.artists = res);
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
    this.showSingle = true;
    this.selectedMusic = data;
  }

  openArtistPopup(data: Artist) {
    this.showArtist = true;
    this.selectedArtist = data;
  }

  closeArtistsPopup() {
    this.showArtist = false;
  }

  @HostListener('window:keyup.esc') onKeyUp() {
    this.closeSingle();
    this.closeArtistsPopup();
  }

}
