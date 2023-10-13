import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage {

  registro = {
    correo: "harrys@ciudal.cl",
    nombres: "Harrys",
    apellidos: "El Magnifico",
    edad: 20,
    fonoContacto:96357252,
    clave: "macarena",
}
  
  constructor(private cliServ:UsuarioService) { }

  grabar(){

    this.cliServ.agregarServicio(this.registro)
  }

}