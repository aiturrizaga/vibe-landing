import { Component, OnInit } from '@angular/core';
import { ConstantService } from "@vibe/shared/services";

@Component({
  selector: 'vibe-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent implements OnInit {

  constructor(public constantService: ConstantService) {
  }

  ngOnInit(): void {
  }

}
