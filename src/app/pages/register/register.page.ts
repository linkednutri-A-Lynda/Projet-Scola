import { NewUser } from './../../interfaces/new-user';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {

  isError: boolean = true;
  user: NewUser ={nom: '', prenom: '', numero:'', adress: '', email: '', password: '', passwordConf: '' };

  constructor(private auth: AuthService) { }

  checkEmail(){
    const regex = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g);
    this.isError = (regex.test(this.user.email.trim())) ? false : true ;
  }

  ngOnInit() {
  }

  inscription(){
    this.auth.getProfile().subscribe(data =>{
      console.log(data);
    });
  }
}


