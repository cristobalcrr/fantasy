import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { ClUsuario } from '../model/ClUsuario';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage {
 
  registro=this.cliServ.getRegistrosReferencia


  constructor(private cliServ:UsuarioService
              ,public cliServPublic:UsuarioService
              ) { 

           
    this.registro=this.cliServ.getRegistrosReferencia
    this.registro.push({id:"10",correo:"x@c.cl",nombres:"M10",apellidos:"P10",edad:20,fonoContacto:963764537,clave:"1134"})
    console.log("registroReferencia:",this.registro)


    this.registro=this.cliServ.getRegistrosCopia
    this.registro.push({id:"20",correo:"x@c.cl",nombres:"M20",apellidos:"P20",edad:20,fonoContacto:963764537,clave:"1134"})
    console.log("registroCopia:",this.registro)

  
    this.registro=this.cliServ.getRegistroMetodo();
    this.registro.push({id:"30",correo:"x@c.cl",nombres:"M30",apellidos:"P30",edad:20,fonoContacto:963764537,clave:"1134"})
    console.log("registroMetodo:",this.registro)
  }

  get getRegistros():ClUsuario[]{
    return this.cliServ.getRegistros
  }

  getRegistrosMetodo():ClUsuario[]{

    return this.cliServ.getRegistrosCopia
  }

}
