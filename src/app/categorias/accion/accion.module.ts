import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ACCIONPageRoutingModule } from './accion-routing.module';

import { ACCIONPage } from './accion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ACCIONPageRoutingModule
  ],
  declarations: [ACCIONPage]
})
export class ACCIONPageModule {}
