import { Component, OnInit } from '@angular/core';
import { ConstantService } from "@vibe/shared/services";

@Component({
  selector: 'vibe-whatsapp-floating-button',
  templateUrl: './whatsapp-floating-button.component.html',
  styles: []
})
export class WhatsappFloatingButtonComponent implements OnInit {

  constructor(public constantService: ConstantService) {
  }

  ngOnInit(): void {
  }

}
