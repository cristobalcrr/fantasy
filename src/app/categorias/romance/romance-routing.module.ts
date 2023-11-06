import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ROMANCEPage } from './romance.page';

const routes: Routes = [
  {
    path: '',
    component: ROMANCEPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ROMANCEPageRoutingModule {}
