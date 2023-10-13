import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [

    { title: 'Login', url: '/login/conectar', icon: 'mail' },
    { title: 'Registro', url: '/registro', icon: 'mail' },
    { title: 'Producto/Listar', url: 'product-list', icon: 'mail' },
    { title: 'Producto/Add', url: 'product-add', icon: 'mail' },
    { title: 'Producto/Editar', url: 'product-edit', icon: 'mail' },
    { title: 'Producto/Detail/1', url: 'product-detail/1', icon: 'mail' },
    { title: 'Producto/Detail/10', url: 'product-detail/10', icon: 'mail' },
    { title: 'Producto/Detail/', url: 'product-detail/', icon: 'mail' },
    { title: 'Producto/Crud', url: 'product-all', icon: 'mail' },

    { title: 'usuario/usuario-list', url: '/usuario/usuario-list', icon: 'mail' },
    { title: 'usuario/usuario-add', url: '/usuario/usuario-add', icon: 'mail' },
    { title: 'usuario/usuaro-edit', url: '/usuario/usuaro-edit', icon: 'mail' },
    { title: 'usuario/usuario-detail', url: '/usuario/usuario-detail', icon: 'mail' },
    { title: 'usuario/usuario-all', url: '/usuario/usuario-all', icon: 'mail' },

  ];

  constructor() {}
}
