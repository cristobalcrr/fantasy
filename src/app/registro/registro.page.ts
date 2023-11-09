import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  Nombre: string = '';
  Password: string = '';
  Email: string = '';
  Telefono: string = '';
  Direccion: string = '';

  constructor(private authService: AuthService, private navCtrl: NavController) {}

  async register() {
    if (this.validateFields()) {
      const registered = await this.authService.register(this.Nombre, this.Password, this.Email, this.Telefono, this.Direccion);
      if (registered) {
        console.log('Usuario registrado correctamente', this.Nombre);
        this.navCtrl.navigateRoot('/registro-foto'); // Redirige al usuario a la página de inicio después del registro.
      } else {
        console.log('Error al registrar el usuario');
      }
    }
  }

  private validateFields(): boolean {
    // Realiza la validación de campos aquí
    if (!this.Nombre || !this.Password || !this.Email || !this.Telefono || !this.Direccion) {
      console.log('Por favor, complete todos los campos.');
      return false;
    }
    // Puedes agregar más validaciones, como verificar el formato del correo electrónico o la longitud de la contraseña.
    return true;
  }
}