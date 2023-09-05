import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegPagoPage } from './reg-pago.page';

const routes: Routes = [
  {
    path: '',
    component: RegPagoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegPagoPageRoutingModule {}
