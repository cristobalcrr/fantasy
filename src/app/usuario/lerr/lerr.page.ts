import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ClUsuario } from '../model/ClUsuario';

import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-add',
  templateUrl: './lerr.page.html',
  styleUrls: ['./lerr.page.scss'],
})
export class LerrPage implements OnInit {
  Usuario: ClUsuario = {
    id: 1511
    ,correo: 'hola@gmail.com'
    , nombres: 'Harrys el Magnifico'
    , apellidos: 'El Ingenioso'
    , edad: 20
    , fonoContacto: 963564758
    , clave: 'hola'
  };

  // Injectamos Librerías a utilizar
  constructor(
    public restApi: UsuarioService
    , public loadingController: LoadingController
    , public alertController: AlertController
    , public route: ActivatedRoute
    , public router: Router
  ) { }

  // En el OnInit, ejecutamos la lectura
  ngOnInit() {
    this.getUsuario();
  }

// Método que permite leer 
  async getUsuario() {
    console.log("getUsuario **************** ParamMap ID:" + this.route.snapshot.paramMap.get('id'));
    // Creamos un Wait
    const loading = await this.loadingController.create({ message: 'Loading...' });
    // Mostramos el Wait
    await loading.present();
    await this.restApi.getUsuario(this.route.snapshot.paramMap.get('id')!)
      .subscribe({
        next: (res) => {
          console.log("Data *****************");
          console.log(res);
          // Si funciona la respuesta la pasamos 
          this.Usuario = res;
          loading.dismiss();
        }
        , complete: () => { }
        , error: (err) => {
          //Si no funcion desplegamos en consola el error
          console.log("Error DetailUser Página", err);
          loading.dismiss(); //Elimina la espera
        }
      })
  }

  // El Html invoca el método delete
  async delete(id: number) {
    // Confirma Primero
    this.presentAlertConfirm(id, 'Confirme la Eliminación, De lo cantrario Cancele');
  }
  // Creamos una rutina para confirmar la eliminación
  async presentAlertConfirm(id: number, msg: string) {
    const alert = await this.alertController.create({
      header: 'Warning!', // Título
      message: msg,   // Mensaje
      buttons: [   // Botones
        {
          text: 'Eliminar : ' + id + " OK",
          handler: () => { // Si presiona ejecuta esto
            //this.router.navigate(['']);
            this.deleteConfirmado(id)
          }
        }
      ]
    });
    // Presenta en pantalla
    await alert.present();
  }

  // Es invocado desde el Alert
  async deleteConfirmado(id: number) {
    alert("Eliminando " + id)
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
    await loading.present();
    await this.restApi.deleteUsuario(id)
      .subscribe({
        next: (res) => {
          console.log("Error DetailUser Página", res);
          loading.dismiss();
          this.router.navigate(['/listar']);
        }
        , complete: () => { }
        , error: (err) => {
          console.log("Error DetailUser Página", err);
          loading.dismiss(); //Elimina la espera
        }

      })
  }

}