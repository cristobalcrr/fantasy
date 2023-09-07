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
  validarFormulario(): boolean {
    // Validar que todos los campos estén completos
    if(this.nombre === '' || (!/^(?=.*[0-9]{4})(?=.*[a-zA-Z]{3})(?=.*[A-Z]).{8,}$/.test(this.Password))  || this.email==='' || this.Telefono==='' || this.Direccion ==='') {
      return false;
    }
        // Devolver true si el formulario es válido
        return true;
      }

  }



