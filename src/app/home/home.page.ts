import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  userName: string | null = null; // Propiedad para almacenar el nombre del usuario

  constructor(private navController: NavController, private authService: AuthService) {}

  async ngOnInit() {
    this.userName = await this.authService.getUserName();
  }

  navigateToPage(pageName: string) {
    this.navController.navigateForward(pageName);
  }

  async logout() {
    await this.authService.logout();
    this.navController.navigateRoot('/login');
  }
}