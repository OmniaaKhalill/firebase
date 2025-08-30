import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { authclass } from '../pages/login/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor( private auth: Auth , private router: Router){

}

login( auth: authclass){

  signInWithEmailAndPassword(this.auth, auth.email, auth.password)
  .then((userCredential) => {
    alert("logedin")
    this.router.navigateByUrl("home")
    const user = userCredential;

    console.log("ay 7aga:" + user)
    // ...
  })
  .catch((error) => {
    alert("error")
    this.router.navigateByUrl("login")
    const errorCode = error.code;
    const errorMessage = error.message;
  })}



Register( email:string, password:string){

  createUserWithEmailAndPassword(this.auth, email, password)  

  .then((userCredential) => {
    alert("Created")
    this.router.navigateByUrl("home")
  
    // ...
  })
  .catch((error) => {
    alert("error")
    this.router.navigateByUrl("login")
    const errorCode = error.code;
    const errorMessage = error.message;
  })
  }



  logout( ){


  signOut(this.auth)

  .then((userCredential) => {

    alert("logedout")
    this.router.navigateByUrl("login")
  

   
    // ...
  })
  .catch((error) => {
    alert("error")
    this.router.navigateByUrl("home")
    const errorCode = error.code;
    const errorMessage = error.message;
  })}


}
