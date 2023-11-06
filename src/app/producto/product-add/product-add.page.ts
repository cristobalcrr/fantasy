import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ClProducto } from '../model/CLProducto';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.page.html',
  styleUrls: ['./product-add.page.scss'],
})
export class ProductAddPage implements OnInit {
    
productForm!: FormGroup;

producto: ClProducto = {
  idProducto: 5151,
  codigo: '08-g1',
  nombreprod: 'harry potter y la piedra folosofal',
  precio: 21990,
  cantidad: 20,
  editorial: 'salammandra',
  categoria: 'fantasia',
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
};

  constructor(private formBuilder: FormBuilder,
    // Injectamos las librerías necesarias
    private loadingController: LoadingController,
    private restApi: ProductServiceService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.productForm = this.formBuilder.group({
        "prod_name": [null, Validators.required],
        "codigo": [null, Validators.required],
        'prod_price': [null, Validators.required],
        'prod_edito': [null, Validators.required],
        'prod_cantidad': [null, Validators.required],
        'prod_cante': [null, Validators.required]
      });
  }
  async onFormSubmit(form: NgForm) {
    console.log("onFormSubmit del Product ADD")

    // Creamos un Loading Controller, Ojo no lo muestra
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
    // Muestra el Loading Controller
    await loading.present();

    // Ejecuta el método del servicio y los suscribe
    await this.restApi.addProduct(this.producto)
      .subscribe({
        next: (res) => {
          console.log("Next AddProduct Page",res)
          loading.dismiss(); //Elimina la espera
          if (res== null){ // No viene respuesta del registro
            console.log("Next No Agrego, Ress Null ");
            return
          }
          // Si viene respuesta
          console.log("Next Agrego SIIIIII Router saltaré ;",this.router);
          this.router.navigate(['/product-list']);
        }
        , complete: () => { }
        , error: (err) => {
          console.log("Error AddProduct Página",err);
          loading.dismiss(); //Elimina la espera
        }
      });
    console.log("Observe que todo lo del suscribe sale después de este mensaje")
  }

}
