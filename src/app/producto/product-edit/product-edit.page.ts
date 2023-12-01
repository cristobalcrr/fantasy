import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClProducto } from '../model/CLProducto';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.page.html',
  styleUrls: ['./product-edit.page.scss'],
})
export class ProductEditPage implements OnInit {
  productForm!: FormGroup;
  producto: ClProducto = {
    idProducto: 1,
    nombreprod: '',
    precio: 0,
    cantidad: 0,
    editorial: '',
    categoria: '',
    codigo: '08-g1',
    fechaNacimiento: new Date(),
    rut: 0,
    dv: 'x',
    enfermedad: 'x',
    fonocontacto: 0,
    raza: 'x',
    edad: 0,
    altura: 0,
    hrini: 'x',
    hrfin: 'x',
    direccion: 'x',
    fCreacion: new Date()
  };
  idProducto: any = '';

  constructor(
    public restApi: ProductServiceService,
    public loadingController: LoadingController,
    public alertController: AlertController,
    public route: ActivatedRoute,
    public router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      "prod_name": [null, Validators.required],
      "prod_price": [null, Validators.required],
      "prod_cantidad": [null, Validators.required],
      "prod_edito": [null, Validators.required],
      "prod_cate": [null, Validators.required]
    });

    this.getProductos(); // Llama a getProductos sin parámetros
  }

  async onFormSubmit() {
    if (!this.idProducto) {
      console.error('Error: idProducto no está definido.');
      return; // Si idProducto no está definido, salimos de la función
    }

    console.log("onFormSubmit ID:" + this.idProducto);
    this.producto.idProducto = this.idProducto;

    await this.restApi.updateProducto(this.idProducto, this.producto)
      .subscribe({
        next: (res) => {
          let idProducto = res['idProducto'];
          this.router.navigate(['/product-detail/' + this.idProducto]);
        },
        complete: () => {},
        error: (err) => {
          console.log(err);
        }
      });
  }

  async getProductos() {
    const productId = this.route.snapshot.params['idProducto'];
    console.log("ngOnInit ID:" + productId);

    if (!productId) {
      console.error('Error: no se proporcionó un idProducto válido.');
      return; // Si no hay un idProducto válido, salimos de la función
    }

    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
    await loading.present();

    await this.restApi.getProducto(productId)
      .subscribe({
        next: (data) => {
          console.log("getProductoID data****");
          console.log(data);
          this.idProducto = data.idProducto;
          this.productForm.patchValue({
            prod_name: data.nombreprod,
            prod_price: data.precio,
            prod_cantidad: data.cantidad,
            prod_edito: data.editorial,
            prod_cate: data.categoria
          });
          loading.dismiss();
        },
        complete: () => {},
        error: (err) => {
          console.log("getUsuarioID Errr****+");
          console.log(err);
          loading.dismiss();
        }
      });
  }

  async presentAlertConfirm(msg: string) {
    const alert = await this.alertController.create({
      header: 'Warning!',
      message: msg,
      buttons: [
        {
          text: 'Okay',
          handler: () => {
            this.router.navigate(['/product-list/']);
          }
        }
      ]
    });
    await alert.present();
  }
}