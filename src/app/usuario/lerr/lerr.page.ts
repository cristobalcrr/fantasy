import { Component, OnInit } from '@angular/core';
import { ClUsuario } from '../model/ClUsuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-lerr',
  templateUrl: './lerr.page.html',
  styleUrls: ['./lerr.page.scss'],
})
export class LerrPage {
  msgError = ""
    buttonEliminarDisabled = false
    buttonLeerDisabled = false
    buttonActualizarDisabled = false
    buttonCrearDisabled = false
    public id: string = '';
    registro:ClUsuario = {
         correo: ''
        ,nombres: ''
        , apellidos: ''
        , edad:0
        ,fonoContacto:0 
        , clave: ''
    }


    constructor(private cliServ:UsuarioService) { }

    leer() { 

        this.registro=this.cliServ.leerServicio(this.id)
        this.registro.apellidos= "jajajajajajaj"
    }
    eliminar() { }
    grabar() { }
    actualizar() { }
    grabarActualizarAutomatico() { }


}
