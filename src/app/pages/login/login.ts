import { Component } from '@angular/core';
import { Auth, AuthSettings } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

logIn:authclass=new authclass("","")
reg:authclass=new authclass("","")


  constructor( private route:Router , private authService:AuthService ){

  }

  login(){


this.authService.login(this.logIn)
  
  }


  Rgister(){
   this.authService.Register(this.reg.email,this.reg.password) 
  }
}


export class authclass{
  constructor(
public email:string,
public password:string,


  ){

  }
}