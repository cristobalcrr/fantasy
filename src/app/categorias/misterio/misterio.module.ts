import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MISTERIOPageRoutingModule } from './misterio-routing.module';

import { MISTERIOPage } from './misterio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MISTERIOPageRoutingModule
  ],
  declarations: [MISTERIOPage]
})
export class MISTERIOPageModule {}
