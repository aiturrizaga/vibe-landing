import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { HomePage } from "@vibe/public/pages";
import { SharedModule } from "@vibe/shared/shared.module";


@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule
  ]
})
export class PublicModule {
}
