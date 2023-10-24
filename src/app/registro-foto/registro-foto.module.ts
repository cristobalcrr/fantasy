import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroFotoPageRoutingModule } from './registro-foto-routing.module';

import { RegistroFotoPage } from './registro-foto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroFotoPageRoutingModule
  ],
  declarations: [RegistroFotoPage]
})
export class RegistroFotoPageModule {}
