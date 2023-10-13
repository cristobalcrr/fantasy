import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LerrPage } from './lerr.page';

const routes: Routes = [
  {
    path: '',
    component: LerrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LerrPageRoutingModule {}
