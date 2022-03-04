import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicContainerComponent } from "@vibe/shared/containers";

const routes: Routes = [
  {
    path: '',
    component: PublicContainerComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./public/public.module').then(m => m.PublicModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
