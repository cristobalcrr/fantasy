import { Component, OnInit } from '@angular/core';
import { ClProducto } from '../model/categoria';

import { ProductServiceService } from '../categoria.service'; // Importa el servicio ProductServiceService

@Component({
  selector: 'app-comedia',
  templateUrl: './comedia.page.html',
  styleUrls: ['./comedia.page.scss'],
})
export class COMEDIAPage implements OnInit {
  productosFantasia: ClProducto[] = []; // Define una variable para almacenar los productos de fantasía

  constructor(private productService: ProductServiceService) { }

  ngOnInit() {
    this.getProductosFantasia(); // Llama al método para obtener los productos de fantasía al inicializar el componente
  }

  getProductosFantasia() {
    const categoriaFantasia = 'comedia'; // Define la categoría 'fantasia'

    this.productService.getProductos(categoriaFantasia).subscribe(
      (productos: ClProducto[]) => {
        this.productosFantasia = productos; // Almacena los productos de fantasía en la variable definida
      },
      (error) => {
        console.error('Error al obtener productos de comedia:', error);
      }
    );
  }
}