import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';
import { ClUsuario } from '../model/ClUsuario';
import { UsuarioService } from '../usuario.service';


@Component({
  selector: 'app-usuario-detail',
  templateUrl: './usuario-detail.page.html',
  styleUrls: ['./usuario-detail.page.scss'],
})
export class UsuarioDetailPage implements OnInit {

  

  usuario: ClUsuario ={
    id : 15
    ,email : 'alvarez@gmail.com'
    ,nombre : 'hugo'
    ,apellido : 'alvarez'
    ,edad : 30
    ,fonoContacto : 974247266

  };

  constructor(
    public restApi: UsuarioService
    , public loadingController: LoadingController
    , public alertController: AlertController
    , public route: ActivatedRoute
    , public router: Router
  ) { }

  ngOnInit() {
    this.getUsuarios();
  }

  async getUsuarios() {
    console.log("getUsuarios **************** ParamMap ID:" + this.route.snapshot.paramMap.get('id'));
    const loading = await this.loadingController.create({ message: 'Loading...' });
    await loading.present();
    await this.restApi.getUsuario(this.route.snapshot.paramMap.get('id')!)
      .subscribe({
        next: (res) => {
          console.log("Data *****************");
          console.log(res);
          this.usuario = res;
          loading.dismiss();
        }
        , complete: () => { }
        , error: (err) => {
          console.log("Error DetailProduct Página", err);
          loading.dismiss();
        }
      })
  }

  async delete(id: number) {
    this.presentAlertConfirm(id, 'Confirme la Eliminación, De lo cantrario Cancele');
  }
  async presentAlertConfirm(id: number, msg: string) {
    const alert = await this.alertController.create({
      header: 'Warning!',
      message: msg,
      buttons: [
        {
          text: 'Eliminar : ' + id + " OK",
          handler: () => { 
            this.deleteConfirmado(id)
          }
        }
      ]
    });
    await alert.present();
  }
  async deleteConfirmado(id: number) {
    alert("Eliminando " + id)
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
    await loading.present();
    await this.restApi.deleteUsuario(id)
      .subscribe({
        next: (res) => {
          console.log("Error DetailProduct Página", res);
          loading.dismiss();
          this.router.navigate(['/product-list']);
        }
        , complete: () => { }
        , error: (err) => {
          console.log("Error DetailProduct Página", err);
          loading.dismiss();
        }

      })
  }

}
