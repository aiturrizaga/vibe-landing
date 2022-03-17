import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent, HeaderComponent } from "@vibe/shared/layouts";
import { PublicContainerComponent } from "@vibe/shared/containers";
import { RouterModule } from "@angular/router";
import { SafePipe } from './pipes/safe.pipe';


@NgModule({
  declarations: [
    HeaderComponent,
    PublicContainerComponent,
    FooterComponent,
    SafePipe
  ],
    exports: [
        FooterComponent,
        SafePipe
    ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule {
}
