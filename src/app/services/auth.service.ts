import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //On doit mettre l'url de l'api ici
  url: string = 'http://localhost:3000';

  constructor( private http: HttpClient) {}

  login(email: string, mdp: string){
    return new Promise((resolve, rejects)=>{
      this.http.post(this.url + '/login', {email: email,  password: mdp }).subscribe((data: any) => {
        if(!data.success)
          rejects(false)
        else
          resolve(data)
      })
    })
  }
  getProfile(){
    return this.http.get(this.url+'/profil');
  }
}
