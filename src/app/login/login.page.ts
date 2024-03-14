import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { NavController, AlertController} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  //Inicio del formulario
  formularioLogin: FormGroup;

  //Constructor con distintas llamadas a elementos que permiten el uso de formularios
  //Y controles de navegación
  constructor(public fb : FormBuilder, public navCtrl : NavController, public alertCtrl : AlertController) { 
    //Asignación de elementos al formulario incluyendo validadores
    this.formularioLogin = this.fb.group({
      'email': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required)
    })
    const usuario = {
      email: 'usuario@example.com',
      password: 'contraseña123',
    };

    // Almacenar el objeto en el localStorage
    localStorage.setItem('usuario', JSON.stringify(usuario))
  }

  ngOnInit() {
  }

  //Método que permite ingresar al home, validando al usuario
  async ingresar() {
    var formulario = this.formularioLogin.value;
    var usuario = JSON.parse(localStorage.getItem('usuario')!);
  
    if (usuario && usuario.email == formulario.email && usuario.password == formulario.password) {
      localStorage.setItem('ingresado', 'true');
      localStorage.setItem('email', usuario.email); // Almacena el nombre del usuario
      this.navCtrl.navigateRoot('home');
    } else {
      const alerta = await this.alertCtrl.create({
        header: 'Datos incorrectos',
        message: 'Los datos ingresados no son correctos',
        buttons: ['Aceptar']
      });
  
      await alerta.present();
    }
  }

  async handleRegister(){}

  async handleForgotPassword(){}
  

}