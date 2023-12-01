import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TERRORPageRoutingModule } from './terror-routing.module';

import { TERRORPage } from './terror.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TERRORPageRoutingModule
  ],
  declarations: [TERRORPage]
})
export class TERRORPageModule {}
