import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { BuscadorComponent } from './buscador/buscador.component';
import { ModalComponent } from 'src/app/race/modal/modal.component';





@NgModule({
  declarations: [ModalComponent, BuscadorComponent],
  exports:[ModalComponent, BuscadorComponent],
  imports: [
    CommonModule,
    IonicModule,
  ]
})
export class RaceModule { }
