import { MdpOublieComponent } from './../../modals/mdp-oublie/mdp-oublie.component';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LoadingController } from '@ionic/angular';
import {ModalController} from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = '';
  password: string = '';

  isError: boolean = true;

  constructor(private modalController: ModalController, private auth: AuthService, private loading: LoadingController, private router: Router) { }

  ngOnInit() {
  }

  async mdpOublie() {
    const modal = await this.modalController.create({
      component: MdpOublieComponent,
    });
    return await modal.present();
  }

  checkEmail(){
    const regex = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g);
    this.isError = (regex.test(this.email.trim())) ? false : true ;
  }
  async login(){
    const load = await this.loading.create({
      cssClass: 'my-custom-class',
      message: 'Chargement en cours ...',
    });
    // await load.present();

    this.auth.login(this.email, this.password).then(async (user) =>{
      await this.loading.dismiss();
      this.router.navigate(['/home']);
    }).catch(()=>{
    this.email = '';
    this.password = '';
    this.isError = true;
  });
}
}
