import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FANTASIAPageRoutingModule } from './fantasia-routing.module';

import { FANTASIAPage } from './fantasia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FANTASIAPageRoutingModule
  ],
  declarations: [FANTASIAPage]
})
export class FANTASIAPageModule {}
