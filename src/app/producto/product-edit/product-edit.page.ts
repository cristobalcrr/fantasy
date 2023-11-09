import { Component, OnInit } from '@angular/core';

// Imporamos librerías
import { LoadingController, AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

import { ClProducto } from '../model/CLProducto';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.page.html',
  styleUrls: ['./product-edit.page.scss'],
})
export class ProductEditPage implements OnInit {
  // FormGroup para validaciones
  productForm!: FormGroup;
  // Esquema a utilizar en el Html
  producto: ClProducto = {idProducto: 1, nombreprod: '', precio: 0, cantidad: 0, editorial: '', categoria: '',
  codigo: '',
  fechaNacimiento: 0,
  rut: 0,
  dv: 0,
  enfermedad: '',
  fonocontacto: 0,
  raza: '',
  edad: 0,
  altura: '',
  hrini: 0,
  hrfin: 0,
  direccion: '',
  fCreacion: 0
};;
  idProducto: any = '';
  //prod_name: string = '';
  //prod_desc: string = '';
  //prod_price:number=null;
  //prod_cantidad:number=null

  // Injectamos librerías

  constructor(public restApi: ProductServiceService,
    public loadingController: LoadingController,
    
    public alertController: AlertController,
    public route: ActivatedRoute,
    public router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    console.log("ngOnInit ID:" + this.route.snapshot.params['idProducto']);
    this.getProductos(this.route.snapshot.params['idProducto']);
    this.productForm = this.formBuilder.group({
      "prod_name": [null, Validators.required],
      "prod_price": [null, Validators.required],
      "prod_cantidad": [null, Validators.required],
      "prod_edito": [null, Validators.required],
      "prod_cate": [null, Validators.required]
    });
  }

  async onFormSubmit(form: NgForm) {
    console.log("onFormSubmit ID:" + this.idProducto)
    this.producto.idProducto = this.idProducto;

    await this.restApi.updateProducto(this.idProducto, this.producto)
    .subscribe({
      next: (res) => {
        let id = res['idProducto'];
        this.router.navigate(['/lerr/' + this.idProducto]);
      }
      , complete: () => { }
      , error: (err) => { console.log(err); }
    })

}

async getProductos(idProducto: number) {
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
    await loading.present();
    await this.restApi.getProducto(idProducto + "")
      .subscribe({
        next: (data) => {
          console.log("getProductoID data****");
          console.log(data);
          this.idProducto = data.idProducto;
          this.productForm.setValue({
            prod_name: data.nombreprod,
            prod_price: data.precio,
            prod_cantidad: data.cantidad,
            prod_edito: data.editorial,
            prod_cate: data.categoria

          });
          loading.dismiss();
        }
        , complete: () => { }
        , error: (err) => {
          console.log("getUsuarioID Errr****+");
          console.log(err);
          loading.dismiss();
        }
      })
  }

  async presentAlertConfirm(msg: string) {
    const alert = await this.alertController.create({
      header: 'Warning!',
      message: msg,
      buttons: [
        {
          text: 'Okay',
          handler: () => {
            this.router.navigate(['/listar/']);
          }
        }
      ]
    });
    await alert.present();
  }
}
