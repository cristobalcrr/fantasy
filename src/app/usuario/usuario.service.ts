import { Injectable } from '@angular/core';
import { ClUsuario } from './model/ClUsuario';



import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

const apiUrl = "http://localhost:3000/usuarios";
const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private registros: ClUsuario[] =
  [{ id: "122",correo: "picapiedrax@harrys.cl", nombres: "Juan Gabriel", apellidos: "Picapiedras",edad:20, fonoContacto:965245673,  clave: "1134" }
      , {id: "128",correo: "patox@harrys.cl", nombres: "Tito Gabril", apellidos: "Picapiedras",edad:21, fonoContacto:965235273,  clave: "1134"} 
      , {id: "123",correo: "roto@harrys.cl", nombres: "marco Gabril", apellidos: "Picapiedras",edad:23, fonoContacto:965246793,  clave: "1134"} 
]

constructor() {
  console.log("Inicio Servicio****************}")
}

getRegistroMetodo(): ClUsuario[] {
  return this.registros
}

get getRegistros(): ClUsuario[] {
  return [...this.registros]
}


get getRegistrosCopia(): ClUsuario[] {

  return [...this.registros]
}

get getRegistrosReferencia(): ClUsuario[] {
  return this.registros
}

agregarServicio(reg:ClUsuario){
  this.registros.push(reg)    
  console.log("Registro Agregars:",this.registros)
}
actualizarServicio(id:string,reg:ClUsuario){
  console.log("buscando")

  let found = this.registros.find((element) => element.id == id);

  if (found){
      found!.apellidos=reg.apellidos
      found!.nombres=reg.nombres
      found!.clave=reg.clave
      found!.correo=reg.correo
      found!.fonoContacto=reg.fonoContacto
      found!.edad=reg.edad
      console.log("found",found)
      console.log("Registro Actualizar:",this.registros)
  }
}
eliminarServicio(id:string){
  console.log("Registro Eliminar:",this.registros)
  for (let i = this.registros.length-1; i >= 0; i--) {
      console.log("busco",i,id,this.registros[i].id)
      if (this.registros[i].id === id) {
          let spliced = this.registros.splice(i, 1);
          console.log(" Eliminado: " , this.registros,[i]);
          
      }
  }
  console.log("Registro Eliminar:",this.registros)
}


leerServicio(id:string):ClUsuario{
  for (let i = 0; i < this.registros.length; i++) {
      if (this.registros[i].id === id) {

          return this.registros[i]
      }
  }        

 
  return {id:"",correo:"", nombres:"",apellidos:"",edad:0 ,fonoContacto:0 ,clave:""}
}


}
