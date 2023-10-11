import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioAddPageRoutingModule } from './usuario-add-routing.module';

import { UsuarioAddPage } from './usuario-add.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuarioAddPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UsuarioAddPage]
})
export class UsuarioAddPageModule {}
