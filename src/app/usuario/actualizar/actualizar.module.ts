import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActualizarPageRoutingModule } from './actualizar-routing.module';

import { ActualizarPage } from './actualizar.page';
import { ReactiveFormsModule } from '@angular/forms'; 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActualizarPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ActualizarPage]
})
export class ActualizarPageModule {}
