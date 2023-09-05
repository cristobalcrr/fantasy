import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { BuscadorComponent } from './buscador/buscador.component';
import { ModalComponent } from 'src/app/race/modal/modal.component';
import { Libro1Component } from './libro1/libro1.component';





@NgModule({
  declarations: [ModalComponent, BuscadorComponent,Libro1Component],
  exports:[ModalComponent, BuscadorComponent,Libro1Component],
  imports: [
    CommonModule,
    IonicModule,
  ]
})
export class RaceModule { }
