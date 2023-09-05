import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LibrosPageRoutingModule } from './libros-routing.module';

import { LibrosPage } from './libros.page';
import { RaceModule } from '../race/race.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LibrosPageRoutingModule,
    RaceModule,
  ],
  declarations: [LibrosPage]
})
export class LibrosPageModule {}
