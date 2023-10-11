import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

import { ClUsuario } from '../model/ClUsuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.page.html',
  styleUrls: ['./usuario-edit.page.scss'],
})
export class UsuarioEditPage implements OnInit {

  UsuarioForm!: FormGroup;
  usuario: ClUsuario = { id: 1, email: '', nombre: '', apellido: '', edad: 0 ,fonoContacto:0 };
  id: any = '';

  constructor(public restApi: UsuarioService,
    public loadingController: LoadingController,
    public alertController: AlertController,
    public route: ActivatedRoute,
    public router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    console.log("ngOnInit ID:" + this.route.snapshot.params['id']);
    this.getUsuarios(this.route.snapshot.params['id']);
    this.UsuarioForm = this.formBuilder.group({
      'prod_name': [null, Validators.required],
      'prod_desc': [null, Validators.required],
      'prod_price': [null, Validators.required],
      'prod_cantidad': [null, Validators.required]
    });
  }
  async onFormSubmit(form: NgForm) {
    console.log("onFormSubmit ID:" + this.id)
    this.usuario.id = this.id;

    await this.restApi.updateUsuario(this.id, this.usuario)
    .subscribe({
      next: (res) => {
        let id = res['id'];
        this.router.navigate(['/usuario-detail/' + this.id]);
      }
      , complete: () => { }
      , error: (err) => { console.log(err); }
    })

}

async getUsuarios(id: number) {
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
            email: data.email,
            nombre: data.nombre,
            apellido: data.apellido,
            edad: data.edad,
            numero: data.fonoContacto,

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
            this.router.navigate(['/usuario-list/']);
          }
        }
      ]
    });
    await alert.present();
  }
}


