import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LerrPageRoutingModule } from './lerr-routing.module';

import { LerrPage } from './lerr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LerrPageRoutingModule
  ],
  declarations: [LerrPage]
})
export class LerrPageModule {}
