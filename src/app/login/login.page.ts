import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  Password='';
  Nombre='';

  constructor() { }

  ngOnInit() {
  }
  login() {
    // Validate the password
    if(this.Nombre === '' || (!/^(?=.*[0-9]{4})(?=.*[a-zA-Z]{3})(?=.*[A-Z]).{8,}$/.test(this.Password))) {
      return;
    }

        // Devolver true si el formulario es válido
        return true;
      }

}
