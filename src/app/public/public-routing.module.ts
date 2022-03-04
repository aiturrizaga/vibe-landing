import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsPage, HomePage, ServicePage } from "@vibe/public/pages";

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'nosotros',
    component: AboutUsPage
  },
  {
    path: 'servicios',
    component: ServicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule {
}
