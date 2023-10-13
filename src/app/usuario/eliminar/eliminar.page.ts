import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.page.html',
  styleUrls: ['./eliminar.page.scss'],
})
export class EliminarPage {
  id="6"

  constructor(private cliServ:UsuarioService) { }

  grabar(){

    this.cliServ.eliminarServicio(this.id)
  }

}