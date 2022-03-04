import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vibe-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  open = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.open = !this.open;
  }

}
