import { Component, OnInit } from '@angular/core';
import { ClProducto } from '../model/CLProducto';
@Component({
  selector: 'app-product-all',
  templateUrl: './product-all.page.html',
  styleUrls: ['./product-all.page.scss'],
})
export class ProductAllPage implements OnInit {
  msgError = ""
  buttonEliminarDisabled = false
  buttonLeerDisabled = false
  buttonActualizarDisabled = false
  buttonCrearDisabled = false
  producto: ClProducto = {
    idProducto: 1, nombreprod: '', precio: 0, cantidad: 0, editorial: '', categoria: '',
    codigo: '',
    fechaNacimiento: 0,
    rut: 0,
    dv: 0,
    enfermedad: '',
    fonocontacto: 0,
    raza: '',
    edad: 0,
    altura: '',
    hrini: 0,
    hrfin: 0,
    direccion: '',
    fCreacion: 0
  };;

  constructor() { }
  ngOnInit() {  }
  public idProducto: number = 0;


  leer() {}
  eliminar() { }
  grabar() { }
  actualizar() { }
  grabarActualizarAutomatico() { }
}

