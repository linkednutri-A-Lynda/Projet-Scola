import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  firstname: string;
  lastname: string;
  date: Date;
  adress: string;
  email: string;
  password: string;

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  inscription(){
    this.auth.getProfile().subscribe(data =>{
      console.log(data);
    });
  }
}
