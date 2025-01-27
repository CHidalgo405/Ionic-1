import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: false,
})
export class RegistroPage implements OnInit {

  email: string = '';
  password : string = '';

  constructor(
    private navController: NavController,
    private toastController: ToastController
  ) { }

  ngOnInit() {
  }

  login(){
    if(this.email === 'kevinsandoval@gmail.com' && this.password === '12345') {
      this.navController.navigateRoot('/inicio');
    } else {
      this.presentToast();
    }
  }

  
    async presentToast() {
      const toast = await this.toastController.create({
        message: 'Las credenciales de acceso con incorrectas',
        duration: 3000,
        position: 'bottom',
        color: 'warning',
      });
  
      await toast.present();
    }

}