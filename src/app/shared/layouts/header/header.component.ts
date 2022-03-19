import { Component, OnInit } from '@angular/core';
import { ConstantService } from "@vibe/shared/services";

@Component({
  selector: 'vibe-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  open = false;


  constructor(public constantService: ConstantService) {
  }

  ngOnInit(): void {
  }

}
