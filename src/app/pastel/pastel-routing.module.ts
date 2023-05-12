import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PastelPage } from './pastel.page';

const routes: Routes = [
  {
    path: '',
    component: PastelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PastelPageRoutingModule {}
