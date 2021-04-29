import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;

  constructor(private auth: AuthService, private loading: LoadingController, private router: Router) { }

  ngOnInit() {
  }

  async login(){
    const load = await this.loading.create({
      cssClass: 'my-custom-class',
      message: 'Chargement en cours ...',
    });
    // await load.present();

    this.auth.getProfile().subscribe(async (user) =>{
      console.log(user);
      this.router.navigate(['/home']);
      await load.onDidDismiss();
    });
    }
}
