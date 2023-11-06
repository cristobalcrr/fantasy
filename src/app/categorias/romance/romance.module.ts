import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ROMANCEPageRoutingModule } from './romance-routing.module';

import { ROMANCEPage } from './romance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ROMANCEPageRoutingModule
  ],
  declarations: [ROMANCEPage]
})
export class ROMANCEPageModule {}
