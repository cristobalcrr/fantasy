import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

// Define constantes para los nombres de las páginas
const PAGE_FANTASIA = 'fantasia';
const PAGE_ROMANCE = 'romance';
const PAGE_ACCION = 'accion';
const PAGE_COMEDIA = 'comedia';
const PAGE_TERROR = 'terror';
const PAGE_MISTERIO = 'misterio';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  constructor(private navController: NavController) {}

  navigateToPage(pageName: string) {
    this.navController.navigateForward(pageName);
  }
}
