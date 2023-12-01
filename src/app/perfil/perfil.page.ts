import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-perfil',
  templateUrl: 'perfil.page.html',
  styleUrls: ['perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  nombre: string = '';
  email: string = '';
  telefono: string = '';
  direccion: string = '';
  editing: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.getUserInfo();
  }

  async getUserInfo() {
    const user = await this.authService.getUserInfo();
    if (user) {
      this.nombre = user.Nombre;
      this.email = user.Email;
      this.telefono = user.Telefono;
      this.direccion = user.Direccion;
    }
  }

  toggleEdit() {
    this.editing = !this.editing;
  }

  async saveChanges() {
    await this.authService.updateUserInfo(this.nombre, this.email, this.telefono, this.direccion);
    this.editing = false;
  }
}