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
  private loadingController: LoadingController,
  private restApi:ProductServiceService,
  private router: Router,
  ) { }

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
async onFormSubmit(form: NgForm) {
  console.log("onFormSubmit del Producto ADD")
const loading = await this.loadingController.create({
  message: 'Loading...'
});

await loading.present();

  await this.restApi.addProducto(this.producto)
  .subscribe({
    next: (res) => {
      console.log("Next AddProducto Page",res)
      loading.dismiss();
      if (res== null){
        console.log("Next No Agrego, Ress Null ");
        return
      }
      
      console.log("Next Agrego SIIIIII Router saltaré ;",this.router);
      this.router.navigate(['/listar']);
    }
    , complete: () => { }
    , error: (err) => {
      console.log("Error AddProducto Página",err);
      loading.dismiss();
    }
  });
console.log("Observe que todo lo del suscribe sale después de este mensaje")
}

}
