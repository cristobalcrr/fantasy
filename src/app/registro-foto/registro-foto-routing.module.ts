import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroFotoPage } from './registro-foto.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroFotoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroFotoPageRoutingModule {}
