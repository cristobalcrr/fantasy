import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [  
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },

  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'recuperar',
    loadChildren: () => import('./recuperar/recuperar.module').then( m => m.RecuperarPageModule)
  },
  {
    path: 'libros',
    loadChildren: () => import('./libros/libros.module').then( m => m.LibrosPageModule)
  },
 
  {
    path: 'product-add',
    loadChildren: () => import('./producto/product-add/product-add.module').then( m => m.ProductAddPageModule)
  },
  {
    path: 'product-all',
    loadChildren: () => import('./producto/product-all/product-all.module').then( m => m.ProductAllPageModule)
  },
  {
    path: 'product-detail/:id',
    loadChildren: () => import('./producto/product-detail/product-detail.module').then( m => m.ProductDetailPageModule)
  },
  {
    path: 'product-edit/:id',
    loadChildren: () => import('./producto/product-edit/product-edit.module').then( m => m.ProductEditPageModule)
  },
  {
    path: 'product-list',
    loadChildren: () => import('./producto/product-list/product-list.module').then( m => m.ProductListPageModule)
  },
 

  {
    path: 'agregar',
    loadChildren: () => import('./usuario/agregar/agregar.module').then( m => m.AgregarPageModule)
  },
  {
    path: 'actualizar/:id',
    loadChildren: () => import('./usuario/actualizar/actualizar.module').then( m => m.ActualizarPageModule)
  },
  {
    path: 'eliminar',
    loadChildren: () => import('./usuario/eliminar/eliminar.module').then( m => m.EliminarPageModule)
  },
  {
    path: 'lerr/:id',
    loadChildren: () => import('./usuario/lerr/lerr.module').then( m => m.LerrPageModule)
  },
  {
    path: 'listar',
    loadChildren: () => import('./usuario/listar/listar.module').then( m => m.ListarPageModule)
  },

  {
    path: 'registro-foto',
    loadChildren: () => import('./registro-foto/registro-foto.module').then( m => m.RegistroFotoPageModule)
  },

  {
    path: 'mapa',
    loadChildren: () => import('./mapa/mapa.module').then( m => m.MapaPageModule)
  },
    {
    path: '**',
    loadChildren: () => import('./not-fount/not-fount.module').then( m => m.NotFountPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
