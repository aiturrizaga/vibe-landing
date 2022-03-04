import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { HomePage } from "@vibe/public/pages";


@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule {
}
