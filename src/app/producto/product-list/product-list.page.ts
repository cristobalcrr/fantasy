import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ClProducto } from '../model/CLProducto';
import { ProductServiceService } from '../product-service.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {
  productos: ClProducto[] = [];

  constructor(public restApi: ProductServiceService
    , public loadingController: LoadingController
    , public router: Router) { }
 
  ngOnInit() {
    this.getProductos();
  }

  async getProductos() {
    console.log("Entrando :getProducts");
    const loading = await this.loadingController.create({
      message: 'Harrys Loading...'
    });
    await loading.present();
    console.log("Entrando :");
    await this.restApi.getProductos()
      .subscribe({
        next: (res) => { 
          console.log("Res:" + res);
          this.productos = res;
          console.log("thisProductos:",this.productos);
          loading.dismiss();
        }
        , complete: () => { }
        , error: (err) => {
          console.log("Err:" + err);
          loading.dismiss();
        }
      })
  }

}

