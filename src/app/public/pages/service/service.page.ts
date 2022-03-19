import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.page.html',
  styles: [
  ]
})
export class ServicePage implements OnInit {

  showBrochure = false;
  pdfSrc = '';

  constructor() { }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

  toggleBrochure() {
    this.showBrochure = !this.showBrochure;
  }

  openBrochure(pdfSrc: string) {
    this.pdfSrc = pdfSrc;
    this.toggleBrochure();
  }

}
