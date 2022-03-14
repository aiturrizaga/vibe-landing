import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwiperModule } from "swiper/angular";
import { PublicRoutingModule } from './public-routing.module';
import { AboutUsPage, DiscographyPage, HomePage, ServicePage } from "@vibe/public/pages";
import { SharedModule } from "@vibe/shared/shared.module";


@NgModule({
  declarations: [
    HomePage,
    AboutUsPage,
    ServicePage,
    DiscographyPage
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule,
    SwiperModule
  ]
})
export class PublicModule {
}
