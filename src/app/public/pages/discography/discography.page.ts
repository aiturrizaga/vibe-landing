import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discography',
  templateUrl: './discography.page.html',
  styles: [
  ]
})
export class DiscographyPage implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

}
