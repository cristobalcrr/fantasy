import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  nombre='';
  Password='';
  email='';
  Telefono='';
  Direccion='';
  

  constructor() { }

  ngOnInit() {
  }

  registrar(){
    if(this.nombre === ''|| this.Password === ''|| this.email ===''|| this.Telefono === ''|| this.Direccion ===''){
      alert('Por favor rellene los campos')
    }

  }
  validarFormulario(): boolean {
    // Validar que todos los campos estén completos
    if(this.nombre === '' || this.Password ==='' || this.email==='' || this.Telefono==='' || this.Direccion ==='') {
      return false;
    }
    if(this.Password.length < 8 ){
      return false;

    }
        // Devolver true si el formulario es válido
        return true;
      }

  }



