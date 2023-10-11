import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ClUsuario } from '../model/ClUsuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.page.html',
  styleUrls: ['./usuario-list.page.scss'],
})
export class UsuarioListPage implements OnInit {

  usuarios: ClUsuario[] = [];

  constructor(public restApi: UsuarioService
    , public loadingController: LoadingController
    , public router: Router) { }

  ngOnInit() {
    this.getUsuarios();
  }

  async getUsuarios() {
    console.log("Entrando :getUsuarios");
    const loading = await this.loadingController.create({
      message: 'Harrys Loading...'
    });
    await loading.present();
    console.log("Entrando :");
    await this.restApi.getUsuarios()
      .subscribe({
        next: (res) => { 
          console.log("Res:" + res);
          this.usuarios = res;
          console.log("thisUsuarios:",this.usuarios);
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
