import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.page.html',
  styleUrls: ['./recover.page.scss'],
})
export class RecoverPage implements OnInit {
  email: string = '';
  message: string = '';
  constructor() { }

  ngOnInit() {

  }
  recoverPassword() {
    const storedUser = JSON.parse(localStorage.getItem('usuario') || '{}');
    if (storedUser.email === this.email) {
      const atIndex = this.email.indexOf('@');
      const maskedEmail = this.email.substring(0, 3) + '****' + this.email.substring(atIndex);
      this.message = `Se ha enviado a tu correo ${maskedEmail} un enlace para que cambies tu contraseña.`;
    } else {
      this.message = 'El correo electrónico ingresado no existe.';
    }
  }
}


