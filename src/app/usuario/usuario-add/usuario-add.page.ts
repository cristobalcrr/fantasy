import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ClUsuario } from '../model/ClUsuario';

import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-add',
  templateUrl: './usuario-add.page.html',
  styleUrls: ['./usuario-add.page.scss'],
})
export class UsuarioAddPage implements OnInit {

  UsuarioForm!: FormGroup;

  usuario: ClUsuario ={
    id : 15
    ,email : 'alvarez@gmail.com'
    ,nombre : 'hugo'
    ,apellido : 'alvarez'
    ,edad : 30
    ,fonoContacto : 974247266

  };

  constructor(private formBuilder: FormBuilder,
    private loadingController: LoadingController,
    private restApi:UsuarioService,
    private router: Router,
    ) { }

  ngOnInit() {
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
