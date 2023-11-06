import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { COMEDIAPageRoutingModule } from './comedia-routing.module';

import { COMEDIAPage } from './comedia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    COMEDIAPageRoutingModule
  ],
  declarations: [COMEDIAPage]
})
export class COMEDIAPageModule {}
