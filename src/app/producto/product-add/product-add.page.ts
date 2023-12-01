import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { ClProducto } from '../model/CLProducto';
import { ProductServiceService } from '../product-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.page.html',
  styleUrls: ['./product-add.page.scss'],
})
export class ProductAddPage implements OnInit {
  productForm!: FormGroup;
  producto: ClProducto = {
    idProducto: 0,
    codigo: '08-g1',
    nombreprod: '',
    precio: 0,
    cantidad: 0,
    editorial: '',
    categoria: '',
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

  constructor(
    private formBuilder: FormBuilder,
    private loadingController: LoadingController,
    private restApi: ProductServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      'prod_name': [null, Validators.required],
      'codigo': [null, Validators.required],
      'prod_price': [null, Validators.required],
      'prod_cantidad': [null, Validators.required],
      'prod_edito': [null, Validators.required],
      'prod_cate': [null, Validators.required]
    });
  }

  async onFormSubmit(formValue: any) {
    const loading = await this.loadingController.create({ message: 'Loading...' });
    await loading.present();

    this.producto = {
      idProducto: 0,
      codigo: formValue.codigo,
      nombreprod: formValue.prod_name,
      precio: formValue.prod_price,
      cantidad: formValue.prod_cantidad,
      editorial: formValue.prod_edito,
      categoria: formValue.prod_cate,
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

    await this.restApi.addProducto(this.producto)
      .subscribe({
        next: (res) => {
          loading.dismiss();
          if (res == null) {
            console.log("Next No Agrego, Ress Null");
            return;
          }

          console.log("Next Agrego SIIIIII, Router redireccionaré;", this.router);
          this.router.navigate(['/product-list']);
        },
        complete: () => { },
        error: (err) => {
          console.log("Error AddProducto Página", err);
          loading.dismiss();
        }
      });
  }
}