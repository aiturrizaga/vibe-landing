import { Component, HostListener, OnInit } from '@angular/core';
import { Music, MusicService } from "@vibe/shared/services";

@Component({
  selector: 'app-discography',
  templateUrl: './discography.page.html',
  styles: []
})
export class DiscographyPage implements OnInit {

  showSingle = false;
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

  constructor(public musicService: MusicService) {
  }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

  toggleSingle() {
    this.showSingle = !this.showSingle;
  }

  openPlayer(data: Music) {
    this.toggleSingle();
    this.selectedMusic = data;
  }

  @HostListener('window:keyup.esc') onKeyUp() {
    this.toggleSingle();
  }

}
