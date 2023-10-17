import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

import { ClUsuario } from '../model/ClUsuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './actualizar.page.html',
  styleUrls: ['./actualizar.page.scss'],
})
export class ActualizarPage implements OnInit {

  UsuarioForm!: FormGroup;
  usuario: ClUsuario = { id: 1, correo: '', nombres: '', apellidos: '', edad: 0 ,fonoContacto:0, clave:'' };
  id: any = '';

  constructor(public restApi: UsuarioService,
    public loadingController: LoadingController,
    
    public alertController: AlertController,
    public route: ActivatedRoute,
    public router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    console.log("ngOnInit ID:" + this.route.snapshot.params['id']);
    this.getUsuario(this.route.snapshot.params['id']);
    this.UsuarioForm = this.formBuilder.group({
      "U_correo": [null, Validators.required],
      "U_nombres": [null, Validators.required],
      "U_apellidos": [null, Validators.required],
      "U_edad": [null, Validators.required],
      "U_fonoContacto": [null, Validators.required],
      "U_clave": [null, Validators.required]
    });
  }

  async onFormSubmit(form: NgForm) {
    console.log("onFormSubmit ID:" + this.id)
    this.usuario.id = this.id;

    await this.restApi.updateUsuario(this.id, this.usuario)
    .subscribe({
      next: (res) => {
        let id = res['id'];
        this.router.navigate(['/lerr/' + this.id]);
      }
      , complete: () => { }
      , error: (err) => { console.log(err); }
    })

}

async getUsuario(id: number) {
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
    await loading.present();
    await this.restApi.getUsuario(id + "")
      .subscribe({
        next: (data) => {
          console.log("getUsuarioID data****");
          console.log(data);
          this.id = data.id;
          this.UsuarioForm.setValue({
            U_correo: data.correo,
            U_nombres: data.nombres,
            U_apellidos: data.apellidos,
            U_edad: data.edad,
            U_fonoContacto: data.fonoContacto,
            U_clave: data.clave

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


