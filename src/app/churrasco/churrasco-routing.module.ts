import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChurrascoPage } from './churrasco.page';

const routes: Routes = [
  {
    path: '',
    component: ChurrascoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChurrascoPageRoutingModule {}
