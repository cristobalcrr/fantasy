import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private storage: Storage) {
    this.ngOnInit();
  }

  async ngOnInit() {
    await this.storage.create();
  }

  async login(Nombre: string, Password: string): Promise<boolean> {
    const usuario = await this.storage.get('user');
    if (usuario) {
      console.log(usuario.Nombre, '-', usuario.Password);
    } else {
      console.log('No se encontraron datos de usuario.');
    }

    if (Nombre === usuario.Nombre && Password === usuario.Password) {
      await this.storage.set('isLoggedIn', true);
      return true;
    } else {
      return false;
    }
  }

  async register(Nombre: string, Password: string, Email: string, Telefono: string, Direccion: string): Promise<boolean> {
    await this.storage.set('user', { Nombre, Password, Email, Telefono, Direccion });
    return true;
  }

  async isLoggedIn(): Promise<boolean> {
    return !!(await this.storage.get('isLoggedIn'));
  }

  async logout(): Promise<void> {
    await this.storage.remove('isLoggedIn');
  }

  async getUserName(): Promise<string | null> {
    const usuario = await this.storage.get('user');
    if (usuario && usuario.Nombre) {
      return usuario.Nombre;
    } else {
      return null;
    }
  }

  async getUserInfo(): Promise<any> {
    return await this.storage.get('user');
  }

  async updateUserInfo(nombre: string, email: string, telefono: string, direccion: string): Promise<void> {
    const user = await this.storage.get('user');
    if (user) {
      user.Nombre = nombre;
      user.Email = email;
      user.Telefono = telefono;
      user.Direccion = direccion;
      await this.storage.set('user', user);
    }
  }
}
