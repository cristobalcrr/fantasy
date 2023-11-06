import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { COMEDIAPage } from './comedia.page';

const routes: Routes = [
  {
    path: '',
    component: COMEDIAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class COMEDIAPageRoutingModule {}
