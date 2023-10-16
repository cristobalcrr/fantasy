import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ClUsuario } from '../model/ClUsuario';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class agregarPage implements OnInit {

    UsuarioForm!: FormGroup;
  
    usuario: ClUsuario ={
      id : 15
      ,correo : 'alvarez@gmail.com'
      ,nombres : 'hugo'
      ,apellidos : 'alvarez'
      ,edad : 30
      ,fonoContacto : 974247266
      ,clave: 'hola'
  
    };
  
    constructor(private formBuilder: FormBuilder,
      private loadingController: LoadingController,
      private restApi:UsuarioService,
      private router: Router,
      ) { }
  
      ngOnInit() {
        this.UsuarioForm = this.formBuilder.group({
            'U-correo': [null, Validators.required],
            'U-nombres': [null, Validators.required],
            'U-apellidos': [null, Validators.required],
            'U-edad': [null, Validators.required],
            'U-fonoContacto': [null, Validators.required],
            'U-clave': [null, Validators.required]
          });
      }
    async onFormSubmit(form: NgForm) {
      console.log("onFormSubmit del Usuario ADD")
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
  
    await loading.present();
  
      await this.restApi.addUsuario(this.usuario)
      .subscribe({
        next: (res) => {
          console.log("Next AddUsuario Page",res)
          loading.dismiss();
          if (res== null){
            console.log("Next No Agrego, Ress Null ");
            return
          }
          
          console.log("Next Agrego SIIIIII Router saltaré ;",this.router);
          this.router.navigate(['/usuario-list']);
        }
        , complete: () => { }
        , error: (err) => {
          console.log("Error AddUsuario Página",err);
          loading.dismiss();
        }
      });
    console.log("Observe que todo lo del suscribe sale después de este mensaje")
    }
  
  }