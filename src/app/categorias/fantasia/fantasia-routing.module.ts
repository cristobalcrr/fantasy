import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FANTASIAPage } from './fantasia.page';

const routes: Routes = [
  {
    path: '',
    component: FANTASIAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FANTASIAPageRoutingModule {}
