import { Component, OnInit } from '@angular/core';
import { ClUsuario } from '../model/ClUsuario';

@Component({
  selector: 'app-usuario-all',
  templateUrl: './usuario-all.page.html',
  styleUrls: ['./usuario-all.page.scss'],
})
export class UsuarioAllPage implements OnInit {
  msgError = ""
  buttonEliminarDisabled = false
  buttonLeerDisabled = false
  buttonActualizarDisabled = false
  buttonCrearDisabled = false
  usuario: ClUsuario = { id: 1, email: '', nombre: '', apellido: '', edad: 0 ,fonoContacto:0 };;

  constructor() { }
  ngOnInit() {  }
  public id: string = '';


  leer() {}
  eliminar() { }
  grabar() { }
  actualizar() { }
  grabarActualizarAutomatico() { }
}
