import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  Password='';
  email='';

  constructor() { }

  ngOnInit() {
  }
  Login(){
    if(this.email ===''||this.Password === ''){
      alert('Por favor rellene los campos')
    }
  }
  validarFormulario(): boolean {
    // Validar que todos los campos estén completos
    if(this.email==='' || this.Password ==='') {
      return false;
    }
    if(this.Password.length < 8 ){
      
      return false;

    }
        // Devolver true si el formulario es válido
        return true;
      }

}
