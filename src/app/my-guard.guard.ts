import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService,
    private storage: Storage
  ) {}

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean | UrlTree> {
    const isLoggedIn = await this.authService.isLoggedIn(); // Método del servicio AuthService para verificar la autenticación
    if (isLoggedIn) {
      return true; // El usuario está autenticado, permite el acceso a la ruta
    } else {
      // El usuario no está autenticado, redirige a la página de inicio de sesión
      return this.router.createUrlTree(['/login']);
    }
  }
}