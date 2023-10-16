import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { agregarPage } from './agregar.page';

const routes: Routes = [
  {
    path: '',
    component: agregarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarPageRoutingModule {}
