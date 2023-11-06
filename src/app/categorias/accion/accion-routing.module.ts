import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ACCIONPage } from './accion.page';

const routes: Routes = [
  {
    path: '',
    component: ACCIONPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ACCIONPageRoutingModule {}
