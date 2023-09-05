import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegPagoPageRoutingModule } from './reg-pago-routing.module';

import { RegPagoPage } from './reg-pago.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegPagoPageRoutingModule
  ],
  declarations: [RegPagoPage]
})
export class RegPagoPageModule {}
