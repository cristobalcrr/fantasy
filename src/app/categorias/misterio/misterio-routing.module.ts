import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MISTERIOPage } from './misterio.page';

const routes: Routes = [
  {
    path: '',
    component: MISTERIOPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MISTERIOPageRoutingModule {}
