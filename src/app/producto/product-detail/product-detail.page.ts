import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';
import { ClProducto } from '../model/CLProducto';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  producto: ClProducto = {
    idProducto: 0,
    nombreprod: '',
    precio: 0,
    cantidad: 0,
    editorial: '',
    categoria: '',
    codigo: '',
    fechaNacimiento: new Date(),
    rut: 0,
    dv: 'x',
    enfermedad: '',
    fonocontacto: 0,
    raza: '',
    edad: 0,
    altura: 0,
    hrini: 'x',
    hrfin: 'x',
    direccion: '',
    fCreacion: new Date()
  };

  constructor(
    public restApi: ProductServiceService,
    public loadingController: LoadingController,
    public alertController: AlertController,
    public route: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    this.getProducto();
  }

  async getProducto() {
    console.log("getProducto ** ParamMap ID:" + this.route.snapshot.paramMap.get('idProducto'));
    // Creamos un Wait
    const loading = await this.loadingController.create({ message: 'Loading...' });
    // Mostramos el Wait
    await loading.present();
    await this.restApi.getProducto(this.route.snapshot.paramMap.get('idProducto')!)
      .subscribe({
        next: (res) => {
          console.log("Data *");
          console.log(res);
          // Si funciona la respuesta la pasamos al producto
          this.producto = res;
          loading.dismiss();
        }
        , complete: () => { }
        , error: (err) => {
          //Si no funcion desplegamos en consola el error
          console.log("Error DetailProduct Página", err);
          loading.dismiss(); //Elimina la espera
        }
      })
  }

  async delete(idProducto: number) {
    this.presentAlertConfirm(idProducto, 'Confirme la Eliminación, de lo contrario, cancele.');
  }

  async presentAlertConfirm(idProducto: number, msg: string) {
    const alert = await this.alertController.create({
      header: 'Warning!',
      message: msg,
      buttons: [
        {
          text: 'Eliminar: ' + idProducto + ' OK',
          handler: () => {
            this.deleteConfirmed(idProducto);
          }
        }
      ]
    });
    await alert.present();
  }

  async deleteConfirmed(idProducto: number) {
    const loading = await this.loadingController.create({ message: 'Loading...' });
    await loading.present();

    this.restApi.deleteProducto(idProducto).subscribe({
      next: () => {
        loading.dismiss();
        this.router.navigate(['/product-list']);
      },
      error: (err) => {
        console.log("Error al eliminar el producto:", err);
        loading.dismiss();
      }
    });
  }
}