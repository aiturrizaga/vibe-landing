import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "@vibe/shared/layouts";
import { PublicContainerComponent } from "@vibe/shared/containers";
import { RouterModule } from "@angular/router";


@NgModule({
  declarations: [
    HeaderComponent,
    PublicContainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule {
}
