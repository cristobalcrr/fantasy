import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  Nombre: string = '';
  Password: string = '';
  credencialesIncorrectas: boolean = false; // Variable para controlar credenciales incorrectas

  constructor(private authService: AuthService, private navCtrl: NavController) {}

  async login() {
    const loggedIn = await this.authService.login(this.Nombre, this.Password);
    if (loggedIn) {
      this.navCtrl.navigateRoot('/home');
    } else {
      this.credencialesIncorrectas = true; // Establecer la variable en true para mostrar el mensaje de error
    }
  }
}