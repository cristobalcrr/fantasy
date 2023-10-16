import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LerrPageRoutingModule } from './lerr-routing.module';

import { LerrPage } from './lerr.page';
import { ReactiveFormsModule } from '@angular/forms'; 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LerrPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [LerrPage]
})
export class LerrPageModule {}
