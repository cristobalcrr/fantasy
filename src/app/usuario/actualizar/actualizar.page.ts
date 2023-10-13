import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.page.html',
  styleUrls: ['./actualizar.page.scss'],
})
export class ActualizarPage {
  id = "5"
  registro = {
      correo: "harrys@ciudal.cl",
      nombres: "Harrys",
      apellidos: "El Magnifico",
      edad: 20,
      fonoContacto:96357252,
      clave: "macarena",
  }

  constructor(private cliServ:UsuarioService) { }

  grabar() { 

      this.cliServ.actualizarServicio(this.id, this.registro)
  }


}

