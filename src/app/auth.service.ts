
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private storage: Storage) {
    this.initStorage(); // Llama a la función de inicialización en el constructor
  }

  async initStorage() {
    await this.storage.create();
  }

  async login(username: string, password: string): Promise<boolean> {
    const user = await this.storage.get('user');

    if (!user || username !== user.Nombre || password !== user.Password) {
      console.log('Credenciales inválidas o usuario no encontrado.');
      return false;
    }

    await this.storage.set('isLoggedIn', true);
    return true;
  }

  async register(username: string, password: string, email: string, phone: string, address: string): Promise<boolean> {
    await this.storage.set('user', { Nombre: username, Password: password, Email: email, Telefono: phone, Direccion: address });
    return true;
  }

  async isLoggedIn(): Promise<boolean> {
    return !!(await this.storage.get('isLoggedIn'));
  }

  async logout(): Promise<void> {
    await this.storage.remove('isLoggedIn');
  }

  async getUserName(): Promise<string | null> {
    const user = await this.storage.get('user');
    return user ? user.Nombre : null;
  }

  async getUserInfo(): Promise<any> {
    return await this.storage.get('user');
  }

  async updateUserInfo(name: string, email: string, phone: string, address: string): Promise<void> {
    const user = await this.storage.get('user');
    if (user) {
      user.Nombre = name;
      user.Email = email;
      user.Telefono = phone;
      user.Direccion = address;
      await this.storage.set('user', user);
    }
  }
}